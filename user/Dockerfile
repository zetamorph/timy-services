FROM golang:1.9-alpine as dev
RUN apk add --update tzdata git;
RUN go get \
    github.com/gorilla/mux \
    github.com/jinzhu/gorm \
    github.com/jinzhu/gorm/dialects/postgres \
    github.com/pilu/fresh
WORKDIR /app
ENTRYPOINT ["fresh"]

FROM golang:1.9-alpine as builder

FROM golang:1.9-alpine as prod