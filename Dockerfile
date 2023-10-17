FROM alpine

WORKDIR /app

COPY ./tracetest-server /app/tracetest-server

# Adding /app folder on $PATH to allow users to call tracetest cli on docker
ENV PATH="$PATH:/app"

# EXPOSE 11633/tcp

ENTRYPOINT ["/app/tracetest-server", "serve"]