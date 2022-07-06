package middlewares

import (
	"net/http"
	"tricitybackend/auth"

	"github.com/gin-gonic/gin"
)

func TokenAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		err := auth.AppTokenValid(c.Request)
		if err != nil {
			c.JSON(http.StatusUnauthorized, "You need to be authorized to access this page")
			c.Abort()
			return
		}
		data, err1 := auth.ExtractAppTokenAuth(c.Request)
		if err1 != nil {
			c.JSON(
				http.StatusUnauthorized,
				gin.H{
					"message": "not authorized",
				})
			return
		}
		c.Set("UserId", data)

		c.Next()
	}
}
