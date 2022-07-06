package service

import "tricitybackend/auth"

//because i will mock signin in the future while writing test cases, it will be defined in an interface:
type sigInInterface interface {
	AuthorizeApp(userId string) (string, error)
}

type signInStruct struct{}

//let expose this interface:
var (
	Authorize sigInInterface = &signInStruct{}
)

func (si *signInStruct) AuthorizeApp(userId string) (string, error) {
	token, err := auth.CreateAppToken(userId)
	if err != nil {
		return "", err
	}
	return token, nil
}
