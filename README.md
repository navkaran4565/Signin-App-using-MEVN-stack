# Signin
This `Signin` application requests some necessary information from users to signup at events,companies or fests .This application stores all the user signup information which can be viewed in the database.

## Non functional Requirements

## Design

This application has a user view that consists of some basic information like:

* Name
* Email
* Telephone
* Company
* Official visit
* Escort required
* Escort name (only if Escort checked)

Once the user fills in all the details and submits his/her infromation,it gets stored in the database.The databse can be viewed by the admin.Admin can do this by signin.The UI in this application is user friendly.There is no delay to store the data in the database when a user signs in.

## Tools

This Signin project is built on MongoDB, Express, Vue, and Nodejs (MEVN).The analysis on what stack to use was done by comparing two stacks i.e MEVN and MEAN MongoDB, Express, Angularjs, and Nodejs.They were scored from 0 to 5 according to the previous knowledge.

#### 0 is BAD and 5 is BEST
|              |   MEVN |  MEAN |
|Usability	   |  5	    |   4   |
|Skill	       |  5     | 	3   |
|Support       |	3.5   |	  4   |
|Total	       |  13.5  | 11    |

MEVN was used here also because Vue makes the application working Smooth when combined with the backend functionality of Express.js and node.js.MongoDB is used as a database here.

## Installation Instructions

Run the following commands in signin application root folder to install the dependencies.

`npm install`

* *Start front end*

`npm run dev` - starts localhost:8080

* *Open a new terminal to Start backend*

`Sudo service mongod start` - starts the mongoDB service

`nodemon serve` - starts nodeJS server

## Architecture

This application has a three tier architecture.

* Vue is used for front end
* ExpressJS and NodeJS is used for backend
* MongoDB is used as the database

## Plan of action

- [x] Non functional analysis
- [x] Tool analysis
- [x] Arcitecture analysis
- [x] User interface design
- [x] Admin view design
- [x] Frontend components
- [x] Backend components
