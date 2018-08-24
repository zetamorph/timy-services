package main

import (
	"encoding/json"
    "log"
    "net/http"
    "github.com/gorilla/mux"
)

type User struct {
	Id string `json:"id, omitempty"`
	Email string `json:"email, omitempty"`
}

var users []User

func GetUser(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for _, user := range users {
		if user.Id == params["id"] {
			json.NewEncoder(w).Encode(user)
			return
		}
	}
	json.NewEncoder(w).Encode(&User{})
}

func CreateUser(w http.ResponseWriter, r *http.Request) {
	var user User
	_ = json.NewDecoder(r.Body).Decode(&user)
	users = append(users, user);
	json.NewEncoder(w).Encode(user)
}

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for index, user := range users {
		if user.Id == params["id"] {
			users[index] = users[len(users) - 1]
			users = append(users[:index], users[index+1:]...)
		}
	}
	w.WriteHeader(http.StatusNoContent)
}

func main() {
	router := mux.NewRouter()

	users = append(users, User{Id: "a", Email: "user1@test.test"})
	users = append(users, User{Id: "b", Email: "user2@test.test"})

    router.HandleFunc("/users/{id}", GetUser).Methods("GET")
    router.HandleFunc("/users", CreateUser).Methods("POST")
    router.HandleFunc("/users/{id}", DeleteUser).Methods("DELETE")
    log.Fatal(http.ListenAndServe(":3100", router))
}