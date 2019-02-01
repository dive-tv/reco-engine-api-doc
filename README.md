# reco-engine-api-doc

Documentation for the Recommendation Engine API. See the live documentation [here](https://dive-tv.github.io/reco-engine-api-doc/)

## Table of Contents

* [API Endpoints](#api-endpoints)
* [Documentation Generation](#documentation-generation)

## API Endpoints

The complete documentation for each is located on __/docs__ folder

<!-- markdown-swagger -->
 Endpoint              | Method | Auth? | Description
 --------------------- | ------ | ----- | -----------
 `/v1/build`           | GET    | Yes   |
 `/v1/ping`            | GET    | Yes   |
 `/v1/profile`         | GET    | Yes   |
 `/v1/profile`         | POST   | Yes   |
 `/v1/profile/{id}`    | DELETE | Yes   |
 `/v1/profile/{id}`    | PATCH  | Yes   |
 `/v1/recommendations` | GET    | Yes   |
<!-- /markdown-swagger -->

## Documentation Generation

See [DEVELOPMENT](./DEVELOPMENT.md) document