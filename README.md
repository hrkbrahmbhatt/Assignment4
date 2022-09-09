# Assignment4
Profile management: Node.js and Express


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


-- The endpoints and their functionalities that you need to create are as follows:
-- 1) /add -> POST Method -> This route should add the data sent with the request body into the post.json file.
-- Sample data sent with the request:
```  {
    "id": "1",
    "name": "updated name",
    "age": "22",
    "gender": "Male",
    "email": "userone@gmail.com"
}
```
- If the data is added successfully, then you should sent a response code of 200.


-- Output Here's what it looks like in action. ( Wait for GIF )


![Alt Text](https://github.com/hrkbrahmbhatt/Assignment4/blob/master/gif1.gif)


- 2) /view -> GET Method -> This route has a optional query param called id. If no query param get passed with the request then you should fetch all the data from the get.json file. If some id gets passed with the request query param, then you should send the details0 of the user having id equal to the id that comes with the request query.

- Sample request without query parameter:
- /view

- Expected response:
```
  [ {
    "id": "1",
    "name": "updated name",
    "age": "22",
    "gender": "Male",
    "email": "userone@gmail.com"
  },
  {
    "id": "2",
    "name": "user two",
    "age": "24",
    "gender": "Female",
    "email": "usertwo@gmail.com"
  },
  {
    "id": "3",
    "name": "user three",
    "age": "23",
    "gender": "Male",
    "email": "userthree@gmail.com"
  } ]
  ```

-- Output Here's what it looks like in action. ( Wait for GIF )


![Alt Text](https://github.com/hrkbrahmbhatt/Assignment4/blob/master/gif2.gif)

- Sample request with query parameter id:
- /view?id=2
- Expected response:

```[ {
      "id": "2",
      "name": "user two",
      "age": "24",
      "gender": "Female",
      "email": "usertwo@gmail.com"
      }]
  ```

- If the data is fetched successfully, then you should send a response code of 200.

- Output Here's what it looks like in action. ( Wait for GIF )


![Alt Text](https://github.com/hrkbrahmbhatt/Assignment4/blob/master/gif3.gif)




# Common Issues

## npm install fails
The current solution has an example for using a private npm repository. if you want to use the public npm repository, remove the .npmrc file.


