# GELOSHOPPING

## Prerequisities
> <ol>
> <li> Clone the repository using the command
>
> ``` 
> git clone https://github.com/SAMJELA-ANGELO/onlineShop
> ```
> </li>
>
> <li> Install dependencies using <strong><em>npm</em></strong>
>
> ``` 
> npm install
> ```
> </li>
>
> <li> Create a .env file at the root directory of the project
>
> ``` 
> touch .env
> ```
> </li>
>
> <li> Copy the content in the readme.txt and paste in the .env file
>
> ``` 
> cp readme.txt .env
> ```
> </li>
>
> </ol>

## 1. Introduction
> ### a. Description:
> This is an online shopping api that consists of various intuitive operations to simulate the experience of commercial operations using technology
>
>This API(Application Programming Interface) is a javaScript based and uses [NodeJs](https://nodejs.org/en) as a runtime  environment built on the [V8 engine](https://nodejs.dev/en/learn/the-v8-javascript-engine/#:~:text=V8%20was%20chosen%20to%20be,apps%2C%20with%20projects%20like%20Electron.)

>### b. Licence
>This is licenced under ISC standard

>
>### c. Conventions
>This explains our converntions used in this project. We enclose the 
><ol><li>imports</li> <li>functions</li> <li>names</li> <>Variables Declarations</li><li>Route names</li> <li> Paths</li></ol>


>## 2. Structure and patterns
This section explains the various folders structures, our methodologies used and the design pattern used 


>#### Folder structure.
>In general, we use the [Barrel exports pattern](https://medium.com/@klauskpm/do-a-barrel-export-aa5b79b76b05)<br> 
>These are the different folders and their structures: <br><br>
><strong>src:</strong>  This is the main entrypoint of our application. It is conidered the root folder in our application.
>
>### Linting and Formatting
>We used eslint as the linting package to find our code's standard.<br>
>Prettier is used for formatting and styling codes.<br>
>By default it is set to format on saving a file.<br>
>The configuration files are in the route directory of the project and are named as .eslintrc.js, .prettierrc.json respectively

## 3. Modules
This section describes all features in our application:
>### Error Handling Technique
>Here we are going to talk about the error handling mechanism in this project.
> ####  Request Lifecycle error handler
><ol>
><li>We have a class that inherits the error context from the execution and updates its values according to the values received</li>
><br>
> <li>Another class which exposes an instance of the previous AppError class and has a static method which handles the request response lifecycle parameters(err, req, res, next)</li>
><br>
><li>This errorHandler function is injected to the express middleware in the server.js file(entrypoint) as an abstract method(Inheritance, abstraction)</li>
></ol>
>
>#### Internal error handling
>This is a type of error that occurs during runtime as well as type errors, asynchronous operation errors and other internal errors that may occur. 
><ol>
><li><strong>UncaughtErrors:</strong> We injected a logger on a nodejs execution context during the application lifetime </li>
><li><strong>UnhandledError:</strong> We injected a logger on a nodejs execution context during the application lifetime </li>
></ol>
>
>### <strong>API Documentation Setup [(api docs link)](http://localhost:8000/api/docs/)</strong>
> An API documentation is a surce of truth to your api implementation.
><br>
>The tool used to generate our documentation is [swagger](https://swagger.io)