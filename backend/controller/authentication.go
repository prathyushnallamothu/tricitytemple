package controller

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"net/http"
	"strconv"
	"tricitybackend/db"
	"tricitybackend/model"
	"tricitybackend/service"

	"github.com/gin-gonic/gin"
	"github.com/golang/glog"
	"github.com/kisielk/sqlstruct"
)

func CheckHealth(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Server Up And Running :)"})
}

func Login(c *gin.Context) {
	var data map[string]interface{}
	err := c.BindJSON(&data)
	if err != nil {
		glog.Error(err)
	}
	database := db.Connect()
	defer database.Close()
	secret := "tricitytemple"
	h := hmac.New(sha256.New, []byte(secret))
	h.Write([]byte(data["password"].(string)))
	password := hex.EncodeToString(h.Sum(nil))
	fmt.Println(password)
	res, err := database.Query("select * from admins where username=? and password=?", data["username"].(string), password)
	if err != nil {
		glog.Error(err)
	}
	var admin model.Admin
	defer res.Close()
	for res.Next() {
		err = sqlstruct.Scan(&admin, res)
		if err != nil {
			glog.Error(err)
		}
	}
	if (admin == model.Admin{}) {
		c.JSON(http.StatusOK, gin.H{"status": "error", "message": "username/password incorrect"})
		return
	}
	strconv.Itoa(admin.ID)
	tk, err := service.Authorize.AuthorizeApp(strconv.Itoa(admin.ID))
	if err != nil {
		glog.Error(err)
	}
	c.JSON(http.StatusOK, gin.H{"status": "success", "token": tk,"user":admin})
}
