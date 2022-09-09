# Assignment4
Express + Node  to get, post and modify user data

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|CORS           | Cors accepted values            | "*"      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 16.17.0
- Install POSTMAN


# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
node app.js
```
  Navigate to `http://localhost:3000` in POSTMAN

- API Document endpoints

  View Endpoint : http://localhost:3000/api/v1/users/view

  Add Endpoint : http://localhost:3000/api/v1/users/add
  
  Edit Endpoint : http://localhost:3000/api/v1/users/edit/:id


# Express + Node 
The main purpose of this repository is to show a project setup and workflow for writing get, post and update data and perform write file .


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                                |
| **controllers**          | Controllers define functions to serve various express routes.                                 |  
| controllers/user.js      | Handling the data coming from route                                                           |
| **routes**               | Contain all express routes, separated by module/area of application                           |        
| **src/models/data**      | Models define schemas that will be used in storing and retrieving data from App database      |
| data/post.json           | storing added and updated data                                                                | 
| /app.js                  | Entry point to express app                                                                    |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   | tsconfig.json            | Config settings for compiling source code only written in TypeScript    
| tslint.json              | Config settings for TSLint code style checking                                                |



# Common Issues

## npm install fails
The current solution has an example for using a private npm repository. if you want to use the public npm repository, remove the .npmrc file.

