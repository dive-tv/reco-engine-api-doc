# reco-engine-api-doc

Documentation for the Recommendation Engine API. See the live documentation [here](https://dive-tv.github.io/reco-engine-api-doc/)

## Table of Contents

* [API Endpoints](#api-endpoints)
* [Documentation Generation](#documentation-generation)

## API Endpoints

The complete documentation for each is located on __/docs__ folder

<!-- markdown-swagger -->
 Endpoint                                                      | Method | Auth? | Description                                                   
 ------------------------------------------------------------- | ------ | ----- | --------------------------------------------------------------
 `/v1/build`                                                   | GET    | Yes   | Returns the information about build of this version of the API
 `/v1/account/{externalAccountId}`                             | PATCH  | Yes   | Updates a user profile on the system                          
 `/v1/account/{externalAccountId}`                             | DELETE | Yes   | Deletes a user profile on the system                          
 `/v1/account/{externalAccountId}/profile/{externalProfileId}` | PATCH  | Yes   | Updates a user profile on the system                          
 `/v1/account/{externalAccountId}/profile/{externalProfileId}` | DELETE | Yes   | Deletes a user profile on the system                          
 `/v1/media_content`                                           | GET    | Yes   | List the media content according a criterias                  
 `/v1/ping`                                                    | GET    | Yes   | Get the health status of the API                              
 `/v1/profile`                                                 | GET    | Yes   | List all profiles or a single profile by Id on the system     
 `/v1/profile`                                                 | POST   | Yes   | Adds a new user profile to the system                         
 `/v1/profile/{id}`                                            | PATCH  | Yes   | Updates a user profile on the system                          
 `/v1/profile/{id}`                                            | DELETE | Yes   | Removes an existent profile from the system                   
 `/v1/recommendations`                                         | GET    | Yes   | List the recommendations associated with a user profile       
<!-- /markdown-swagger -->

## Documentation Generation

See [DEVELOPMENT](./DEVELOPMENT.md) document