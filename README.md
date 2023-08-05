# Halal-Food API Documentation

These documents are used for the [halal-food-mern](https://www.halal-food-mern.dev/)

#### Contents

- [Overview](#1-overview)
- [Authentication](#2-authentication) ( [Sign Up](#21-sign-up) / [Login](#22-login) )
- [Resources](#3-resources)
  - [Users](#31-users) ( [Get Current User](#311-get-current-user) )
  - [Brands](#32-brands) ( [Get All Brands](#321-get-all-brands) )

## 1. Overview

•	Developed food track app that which brands get to halal certificate for food.   
•	Created  food API which implemented **Node.js** and **MongoDB**   
•	Implemented authentication with **JSON Web Token** and **Cookie**   
•	Managed global UI state with **Context API**, manage remote state with **React Query**     
•	Used React Query for **caching** mechanism  
•	Handled form submission and data loding with **React Router v6**  
•	Used tools : Styled-components, React Query, React Router, Express.js, Mongoose, Multer, Cloudinary   

## 2. Authentication

In order to view some routes, you will need an access token.

### 2.1. Sign Up

For the protected routes, firstly you should sign up.

```
POST https://www.halal-food-mern.dev/api/v1/auth/register
```

The first step, you should send json body. Example body:

```json
{
    "name": "exampleName",
    "lastName": "exampleLastName",
    "email": "exampleEmail@email.com",
    "password": {{password}}
}
```

With the following fields:

| Parameter | Type   | Required? | Description                                      |
| --------- | ------ | --------- | ------------------------------------------------ |
| name      | string | required  | The name of the user.                            |
| lastName  | string | required  | The last name of the user.                       |
| email     | string | required  | The email of the user. Email should be unique.   |
| password  | string | required  | The password of the user. At least 6 characters. |

Example response:

```json
{
  "msg": "user created"
}
```

Possible errors:

| Error code      | Description                             |
| --------------- | --------------------------------------- |
| 400 Bad Request | Duplicate fields or invalid input data. |

### 2.2. Login

```
POST https://www.halal-food-mern.dev/api/v1/auth/login
```

The first step, you should send json body. Example body:

```json
{
  "email": "exampleEmail@email.com",
  "password": "{{password}}"
}
```

With the following fields:

| Parameter | Type   | Required? | Description               |
| --------- | ------ | --------- | ------------------------- |
| email     | string | required  | The email of the user.    |
| password  | string | required  | The password of the user. |

Example response:

```json
{
  "msg": "user logged in"
}
```

Possible errors:

| Error code       | Description                                     |
| ---------------- | ----------------------------------------------- |
| 400 Bad Request  | Invalid input data. Provide email and password. |
| 401 Unauthorized | Invalid credentials                             |

## 3. Resources

The API is RESTful and arranged around resources. All requests must be made using `https`.

### 3.1. Users

#### 3.1.1. Get Current User

Returns details of the user who has granted permission to the application.

```
GET https://www.halal-food-mern.dev/api/v1/users/current-user
```

The response is a User object within a data envelope. Example response:

```json
{
  "user": {
    "_id": "64cc9f4b332d40712b2cf98b",
    "name": "exampleName",
    "email": "exampleEmail@email.com",
    "lastName": "exampleLastName",
    "role": "user",
    "__v": 0
  }
}
```

Possible errors:

| Error code       | Description            |
| ---------------- | ---------------------- |
| 401 Unauthorized | authentication invalid |

### 3.2. Brands

#### 3.2.1. Get All Brands

Returns a full list of brands. An example request looks like this:

```
GET https://www.halal-food-mern.dev/api/v1/brands
```

The response is a list of brands objects. The response array is wrapped in a data envelope. This endpoint will return all brands. Example response:

```json
{
    "results": 10,
    "totalBrands": 98,
    "numOfPages": 10,
    "currentPage": 1,
    "brands": [
        {
            "_id": "64cb8c866da8e420f0145003",
            "brandName": "Marka X",
            "companyName": "Firma X",
            "address": "Test Address",
            "brandStatus": "pending",
            "category": "White Meat",
            "createdBy": "64ca583eeca9f6bc9df24550",
            "createdAt": "2023-08-03T11:16:22.877Z",
            "updatedAt": "2023-08-03T11:16:22.877Z",
            "__v": 0
        },
}
```

Where a Brand object is:

| Field       | Type   | Description                                                                                                                 |
| ----------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| \_id        | string | The id of brand.                                                                                                            |
| brandName   | string | The name of brand.                                                                                                          |
| companyName | string | The name of company.                                                                                                        |
| address     | string | The address of brand.                                                                                                       |
| brandStatus | string | The status of brand. Status is either: pending, confirmed, cancelled, expired                                               |
| category    | string | The category of brand. Category is either: White Meat, Milk and Dairy Products, Biscuits / Chocolate, Red Meat, Fruit Juice |
| createdBy   | string | The id of user.                                                                                                             |
| createdAt   | string | The date of created brand.                                                                                                  |
| updatedAt   | string | The date updated brand.                                                                                                     |
