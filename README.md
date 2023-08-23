# Quotes Fetcher

This test covers the design and development of an API that enable users to receive unique quotes from an external service

This project exposes three endpoints :

-   {{baseURL}}/auth/sign-up

-   {{baseURL}}/auth/sign-in and

-   {{baseURL}}/quote

It is a backend task that covers the following :

1. Token Based Authentication using JWT
2. Communicating with an External Service ,
   etc

## Table of Contents

1. Project Constraints
1. Requirements
1. Downloading the Project
1. Dependencies
1. Environemnt Settings
1. How to Restore the Database
1. Starting the App
1. Code Formatting
1. Static Code Analysis
1. Running Test
1. Making Contributions and Modifications

### Project Constraints

The project adheres to the following constraints :

1. No two users can exists with the same email. If a user tries to sign up using an
   already existing email, the server should respond with an error message

1. Unauthenticated users should not be able to get any quote

### Project Requirements

This project depends on certain technologies. They are necessary to get it running.
They include :

> [NodeJS](https://nodejs.org)

> [Typescript](https://typescript.lang)

How to get the app running is discussed in a near section below

### Downloading the Project

Clone this project using the git clone command.
The stable branch is set to main and that is the branch you should run.
Other development branch as at the time of pushing the codes were short lived and
therefore deleted.

To get this project, do :

`git clone https://github.com/adeisbright/sbsc-test.git`

### Dependencies

After cloning the repository, you are now a step closer to running the project.

The project dependencies are listed in package.json at the root of the directory.

After downloading and installing NodeJS , and MongoDB ; you can install the
dependencies using :

`npm install`

Run the command above at the root of this project directory.

Some of the dependencies needs explanation.

**ExpressJS**

The HTTP Framework used for buiding the REST Endpoints

**cors**
Used for Cross Origin Request Handling
Currently, the project is configured to accept request from any origin

**dotenv**
We use this library for reading environment variables at runtime

**morgan**
Morgan is an HTTP request logging middleware

**Winston**
Winston provides utilities to enable logging instead of using console.log

With Winston, we can centralize our logs whether to file or any other streaming
options.

When used with Morgan, it can be used to log http request to a file
or any preferred destination

We use Morgan and Winston to log requests and error to files

**jest**
Jest is a testing framework

**joi**
A data validation library.
In this project, we use joi to validate parts of a request body to ensure
the required fields are provided during a request session

**@ngneat/falso**
Provides fake data

During testing, we need to create random fake data to test our endpoints.
This library generates fake data for us.

**helmet**
Helps to cover sensistive HTTP header information

If not protected, HTTP headers information can be used by an attacker
to diagnose your server.

Make it hard for them to do this by hiding sensitive information

It covers the X-Powered-By HTTP header.
Without helmet, express will leak this information
**compression**
Reduces the amount of downladable data that is sent to the client .
With Compression, Gzip is used automatically to make the size of our
response data smaller

**eslint**

This library is used for static code analysis.
It lints our codebase for possible problems

**eslint-config-prettier**

We want to be able to use prettier for code formatting and eslint for
linting.
Eslint can check for code formats too.
We do not want that, so this library helps to make eslint ignore formatting rules
during its check

**prettier**
Prettier is a code formatting tool.
It helps a project to maintain a consistent style guide.
The rules of formatting are declared in .prettierc

In a section below, you will see how to run formatting

**@types/{lib}**
{lib} can be any library.
The format above offers typescript support to {lib}
So, we will have access to types in {lib}

**ts-node**
Typescript support for nodejs

**ts-node-dev**
Same as ts_node , although this watches your file and does the transpilation
on the code once there is a change in code

**typescript**
Installs the typescript installer

### Environment Settings

Provide appropriate values where needed as specified in env.sample file

Endeavour the provide the database urls for development , testing , and production

Other environment variables are also necessary.
Without values , the project will not run

If you need any help filling the values , kindly reach out to me

### Testing

You can run using :

`npm test`

The short time span did not provide me the opportunity to format, lint, and properly test
the code

### Starting the APP

To run the app locally, use :

`npm run devstart`

To run in production, use :

`npm run start`

### POSTMAN API Documentation

The Endpoints to hit and the needed data is provided in the
[POSTMAN DOCS](https://www.postman.com/blue-comet-755501/workspace/node/request/20669319-783f355c-ee09-4dae-8c2c-00e68824d458)

### Making Contributions and Modifications

Raise an issue on anything, and I will respond.
