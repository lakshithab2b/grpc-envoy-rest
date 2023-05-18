# gRPC to Rest api

A demo project for NestJs gRPC microservice expose as REST api using envoy proxy

<p >
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo.svg" width="100" alt="Nest Logo" /></a>
  <a href="https://www.envoyproxy.io/" style="margin-left:30px" target="blank"><img src="https://cncf-branding.netlify.app/img/projects/envoy/horizontal/color/envoy-horizontal-color.svg" width="130" alt="Envoy Logo" /></a>
</p>

## prerequisite

Install protobuf with brew

```bash
brew update
brew install protobuf
```

Install envoy proxy with brew

```bash
brew update
brew install envoy
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/lakshithab2b/grpc-envoy-rest.git
```

Go to the project directory

```bash
  cd grpc-envoy-rest
```

start envoy

```bash
  ./start.sh
```

Go to the grpc-svc project directory

```bash
  cd grpc-envoy-rest/apps/grpc-svc
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```

Go to the rest-svc project directory

```bash
  cd grpc-envoy-rest/apps/rest-svc
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```

## Running Tests

To run tests, run the following command

```bash
  # list users
  $ curl -X GET http://localhost:8082/list

  # create user
  $ curl -X POST \
  -H 'Content-Type: application/json' \
  -d '{"name":"John Doe","age":36}' \
  http://localhost:8082/create

  # list products
  $ curl -X GET http://localhost:8080/product

  # create products
  $ curl -X POST \
  -H 'Content-Type: application/json' \
  -d '{"name":"Laptop"}' \
  http://localhost:8080/product

```

## Authors

- [@lakshitha](https://github.com/lakshithab2b)
