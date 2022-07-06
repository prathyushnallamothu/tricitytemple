package model

type Event struct {
	ID            int               `json:"id" sql:"id"`
	Title         string            `json:"title" sql:"title"`
	Description   string            `json:"description" sql:"description"`
	Starttime     string            `json:"start" sql:"start_time"`
	Endtime       string            `json:"end" sql:"end_time"`
	ImgUrl        string            `json:"img_url" sql:"img_url"`
	Location      string            `json:"location" sql:"location"`
	ExtendedProps map[string]string `json:"extendedProps"`
}
