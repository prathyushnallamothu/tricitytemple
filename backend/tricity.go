package main

import (
	"flag"
	"tricitybackend/app"
)

func init() {
	flag.Parse()
}
func main() {
	app.StartApp()
}
