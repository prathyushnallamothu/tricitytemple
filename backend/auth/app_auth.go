package auth

import (
	"fmt"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/dgrijalva/jwt-go"
)

func CreateAppToken(userId string) (string, error) {
	expirationTime := time.Now().Add(365 * 24 * 60 * time.Minute)
	claims := jwt.MapClaims{}
	claims["authorized"] = true
	claims["userId"] = userId
	claims["ExpiresAt"] = int64(expirationTime.Unix())
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString([]byte("nksdmdfdlkfmfsd"))
}

func AppTokenValid(r *http.Request) error {
	token, err := VerifyAppToken(r)
	if err != nil {

		return err
	}
	if _, ok := token.Claims.(jwt.Claims); !ok && !token.Valid {
	
		return err
	}
	return nil
}
func VerifyAppToken(r *http.Request) (*jwt.Token, error) {
	tokenString := ExtractAppToken(r)
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		//does this token conform to "SigningMethodHMAC" ?
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}

		return []byte("nksdmdfdlkfmfsd"), nil
	})
	if err != nil {
		return nil, err
	}
	claims, ok := token.Claims.(jwt.MapClaims) //the token claims should conform to MapClaims
	if ok && token.Valid {
		exptime, err := strconv.ParseInt(fmt.Sprintf("%.f", claims["ExpiresAt"]), 10, 64)
		if err != nil {
			return nil, err
		}

		t := time.Unix(exptime, 0)
		remainder := t.Sub(time.Now())
		if remainder <= 0 {
			
			return nil, http.ErrHandlerTimeout
		}
	}
	return token, nil
}

//get the token from the request body
func ExtractAppToken(r *http.Request) string {
	keys := r.URL.Query()
	token := keys.Get("token")
	if token != "" {
		return token
	}
	bearToken := r.Header.Get("Authorization")
	//normally Authorization the_token_xxx
	strArr := strings.Split(bearToken, " ")
	if len(strArr) == 2 {
		return strArr[1]
	}
	return ""
}

func ExtractAppTokenAuth(r *http.Request) (string, error) {
	token, err := VerifyAppToken(r)
	if err != nil {
		return "", err
	}
	claims, ok := token.Claims.(jwt.MapClaims) //the token claims should conform to MapClaims
	if ok && token.Valid {
		userId, ok := claims["UserId"].(string) //convert the interface to string
		if !ok {
			return "", err
		}
		return userId, nil
	}
	return "", err
}
