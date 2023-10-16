FROM golang:1.20 as builder

WORKDIR /tracetest
# Copy the Go Modules manifests
COPY ./ ./
#RUN go mod download

# Build
RUN make dist/tracetest-server
# RUN cd server 
# RUN  env GOOS=linux CGO_ENABLED=0 GO111MODULE=on /usr/local/go/bin/go build -o tracetest-server 

FROM alpine

WORKDIR /app

COPY --from=builder /tracetest/tracetest-server /app/tracetest-server

# Adding /app folder on $PATH to allow users to call tracetest cli on docker
ENV PATH="$PATH:/app"

# EXPOSE 11633/tcp

ENTRYPOINT ["/app/tracetest-server", "serve"]