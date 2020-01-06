package main

import "github.com/gorilla/mux"
import "github.com/gorilla/handlers"
import "log"
import "net/http"
import "fmt"
import "strconv"

func addHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Request")
	vars := mux.Vars(r)
	a, ok := vars["a"]
	if !ok {
		w.WriteHeader(400)
		return
	}
	b, ok := vars["b"]
	if !ok {
		w.WriteHeader(400)
		return
	}
	x, err := strconv.Atoi(a)
	if err != nil {
		w.WriteHeader(400)
		return
	}
	y, err := strconv.Atoi(b)
	if err != nil {
		w.WriteHeader(400)
		return
	}
	fmt.Fprintf(w, strconv.Itoa(x+y))
}

func main() {
	log.Println("Start")

	r := mux.NewRouter()
	r.Methods("GET").Path("/{a}/{b}").HandlerFunc(addHandler)

	server := handlers.CORS()(r)
	http.ListenAndServe(":8080", server)
}