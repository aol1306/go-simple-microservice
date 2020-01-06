#build stage
FROM golang:alpine AS builder
WORKDIR /workdir
COPY . .
RUN apk add --no-cache git
ENV CGO_ENABLED=0
RUN go build

#final stage
FROM scratch
COPY --from=builder /workdir/backend /backend
EXPOSE 8080
CMD ["/backend"]