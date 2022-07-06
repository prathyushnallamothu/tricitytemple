package controller

import (
	"fmt"
	"net/http"
	"time"
	"tricitybackend/db"
	"tricitybackend/model"

	"github.com/gin-gonic/gin"
	"github.com/golang/glog"
	"github.com/kisielk/sqlstruct"
)

func GetEvents(c *gin.Context) {

	var events []model.Event
	var event model.Event
	DB := db.Connect()
	defer DB.Close()
	start := time.Now().Format("2006-01-02 15:04")
	query := "select * from events where start_time>?"
	args := make([]interface{}, 0)
	args = append(args, start)
	id, idExist := c.Params.Get("id")
	if idExist {
		query += " and id=?"
		args = append(args, id)
	}
	res, err := DB.Query(query, args...)
	if err != nil {
		glog.Error(err)
	}
	defer res.Close()
	for res.Next() {
		event = model.Event{}
		err = sqlstruct.Scan(&event, res)
		if err != nil {
			glog.Error(err)
		}
		event.ExtendedProps = make(map[string]string)
		event.ExtendedProps["calendar"] = "Personal"
		events = append(events, event)
	}
	c.JSON(http.StatusOK, gin.H{"status": "success", "events": events})
}

func CreateEvent(c *gin.Context) {

	var event model.Event
	err := c.BindJSON(&event)
	if err != nil {
		glog.Error(err)
	}

	startDate, err := time.Parse("2006-01-02 15:04", event.Starttime)
	if err != nil {
		panic(err)
	}
	endDate, err := time.Parse("2006-01-02 15:04", event.Endtime)
	if err != nil {
		panic(err)
	}

	//today, _ := time.Parse("2006-01-02 15:04", time.Now().Format("2006-01-02 15:04"))
	fmt.Println(endDate, startDate)
	/* 	if startDate.Unix() < today.Unix() {
	   		c.JSON(http.StatusOK, gin.H{"status": "error", "message": "error , start date cannot be less than now"})
	   		return
	   	}

	   	if endDate.Unix() < startDate.Unix() {
	   		c.JSON(http.StatusOK, gin.H{"status": "error", "message": "error , end date cannot be less"})
	   		return
	   	} */
	DB := db.Connect()
	defer DB.Close()
	res, err := DB.Prepare("insert into events(title,description,start_time,end_time,img_url,location) values(?,?,?,?,?,?)")
	if err != nil {
		glog.Error(err)
	}
	_, err = res.Exec(event.Title, event.Description, event.Starttime, event.Endtime, event.ImgUrl, event.Location)
	if err != nil {
		glog.Error(err)
	}
	defer res.Close()
	c.JSON(http.StatusOK, gin.H{"status": "success", "message": "event created"})
}

func UpdateEvent(c *gin.Context) {
	var data map[string]interface{}

	err := c.BindJSON(&data)
	if err != nil {
		glog.Error(err)
	}

	/* 	if startDate.Unix() < today.Unix() {
	   		c.JSON(http.StatusOK, gin.H{"status": "error", "message": "error , start date cannot be less than now"})
	   		return
	   	}

	   	if endDate.Unix() < startDate.Unix() {
	   		c.JSON(http.StatusOK, gin.H{"status": "error", "message": "error , end date cannot be less"})
	   		return
	   	} */
	DB := db.Connect()
	defer DB.Close()
	res, err := DB.Query("update events set title=?,description=?,start_time=?,end_time=?,img_url=?,location=? where id=?", data["title"], data["description"], data["start"], data["end"], data["img_url"], data["location"], data["id"])
	if err != nil {
		glog.Error(err)
	}
	defer res.Close()
	c.JSON(http.StatusOK, gin.H{"status": "success", "message": "event updated"})
}

func DeleteEvent(c *gin.Context) {
	eventId, _ := c.Params.Get("id")

	DB := db.Connect()
	defer DB.Close()
	res, err := DB.Query("delete from events where id=?", eventId)
	if err != nil {
		glog.Error(err)
	}
	defer res.Close()
	c.JSON(http.StatusOK, gin.H{"status": "success", "message": "successfully deleted"})
}
