package db

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
	"github.com/golang/glog"
)

func Connect() *sql.DB {
	dbDriver := "mysql"
	dbUser := "root"
	dbPass := "password"
	dbName := "tricity_temple"
	dbhost := "127.0.0.1"
	dbport := "3306"
	db, err := sql.Open(dbDriver, dbUser+":"+dbPass+"@tcp("+dbhost+":"+dbport+")/"+dbName)
	if err != nil {
		glog.Error(err.Error())
	}
	return db
}
