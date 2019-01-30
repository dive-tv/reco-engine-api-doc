# reco-engine-api-doc - Documentation Generation
[back](./README.md)

Documentation generation for recommendation api

## Table of contents

* [Requirements](#requirements)
* [NPM scripts](#npm-scripts)
* [Environment Variables](#environment-variables)

## Requirements

* Linux based development OS
* [curl](https://curl.haxx.se/) installed locally
* [Node/Npm](https://nodejs.org) Version 8.10.0
* [AWS CLI](https://aws.amazon.com/es/cli/)

## NPM Scripts

* [Swagger Get](#swagger-get)
* [Swagger Generate](#swagger-generate)
* [Swagger Generate Markdown](#swagger-generate-markdown)
* [Swagger](#swagger)

### Swagger Get

Download the Swagger api definition from amazon and saves it on the __/swagger__ folder. 
It's saves the files in __yaml__ and __json__ format

```shell
$ npm run swagger:get
```

### Swagger Generate

Generate the website with the API documentation on __/docs__ folder

```shell
$ npm run swagger:generate
```

### Swagger Generate Markdown

Updates the endpoints table on the __[README](./README.md)__ file

```shell
$ npm run swagger:generate:md
```

### Swagger

Generates all the documentation executing all the __swagger:*__ scripts

```shell
$ npm run swagger
```
## Environment Variables

must be located in a __.env__ file for development

Name                  | Description                       | Required
--------------------- | --------------------------------- | ------------------------
`AWS_REST_API_ID_DEV` | Development AWS REST API Id       | __for development__
`AWS_STAGE_NAME_DEV`  | Development AWS API Stage name    | __for development__
`AWS_REST_API_ID_PRE` | Pre-production AWS REST API Id    | __for pre-production__ 
`AWS_STAGE_NAME_PRE`  | Pre-production AWS API Stage name | __for pre-production__
`AWS_REST_API_ID_PRO` | Production AWS REST API Id        | __for production__
`AWS_STAGE_NAME_PRO`  | Production AWS API Stage name     | __for production__