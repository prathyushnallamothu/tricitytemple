package app

import (
	"tricitybackend/controller"
	middlewares "tricitybackend/middleware"
)

func route() {
	router.GET("/health", controller.CheckHealth)
	router.POST("/login",controller.Login)

	//events
	router.GET("/events",controller.GetEvents)
	router.GET("/events/:id",controller.GetEvents)
	router.POST("/events",middlewares.TokenAuthMiddleware(),controller.CreateEvent)
	router.PUT("/events",middlewares.TokenAuthMiddleware(),controller.UpdateEvent)
	router.DELETE("/events/:id",middlewares.TokenAuthMiddleware(),controller.DeleteEvent)
}
