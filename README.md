technologiees used
-psql (PostgreSQL) 16.1
-node js v18.18.0
-React js
-Express Js

-The Application contains a client folder and a server folder.

(-------------------------------DATABSE CONFIGURATIONS------------------------------------)
Step-1 ( INSTALLING DATABASE CONFIGURATION)--------------------- - Install PostgreSQL in to the system . - Setup the Environment variable path. - Open Command Prompt and run command "psql -U postgres" . Here postgres is the super admin name give your super admin name if already installed. - Then it will ask for password Give the Password that you entered while installing postgres.

Step-2 (CREATING DATABASE AND TABLE)-----------------
-All these commands are available inside folder modelin queries.sql file. path to the folder todo_list-->server-->model-->queries.sql - Run Command "CREATE DATABASE todolist;". To create the Database. - Run command "\c todolist;" Enter in to the database .


                  -Then create User table using Below mentioned query
                  " CREATE TABLE users (
                  user_id SERIAL PRIMARY KEY,
                  name VARCHAR(500),
                  email VARCHAR(500),
                  mobile VARCHAR(500),
                  password VARCHAR(500),
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                  ); "

         -After creating user table  create studentss table using below mentioned query
             "   
              CREATE TABLE students (
                  student_id SERIAL PRIMARY KEY,
                  name VARCHAR(150),
                  roll INT UNIQUE,
                  contact VARCHAR(50),
                  standard VARCHAR(50),
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
              );
               
         "

Step-3 (CONNECTING NODEJS TO POSTGRESSQL DATABASE)-----------------
-Goto folder "model" in server and Open "dbcon.js" file .You will be able to see the code mentioned below.
const Pool = require("pg").Pool;
const pool = new Pool({
user: "postgres",
password: "Tushar@123",
host: "localhost",
port: "5432",
database: "todolist",
});
module.exports = pool;
-In this Code Change The "user" to YOUR "super admin" User name that you have given while installing postgresql.
And "password" YOUR password that you have given while installing postgres.
And YOUR Port number In which Your Postgres Server Is running.

(-------------------------------SERVER SITE CONFIGURATIONS------------------------------------)

Step-1 (INSTALLING ALL THE DEPENDENCIES-------------------)
-Move Into the server folder in TERMINAL and Run The bellow Command. > npm i
and hit Enter
-Then Run ">npm run dev " command to start the server.
-If ".env" file is absent in server folder then create a .env file add add the below code
PORT=5000
JWT_SECRET="Merge-Alpha6578"
-and then restart the server.
-All task related apis are protected Apis so user mest be logged in before accessing those features. -

(-------------------------------CLIENT SITE CONFIGURATIONS------------------------------------)

Step-1 (INSTALLING ALL THE DEPENDENCIES-------------------)
-Move Into the folder "client" then  Run The bellow Command. > npm i
and hit Enter
-Then Run ">npm run dev " command to start the server.
-If ".env" file is absent in client folder then create a .env file add add the below code
VITE_REACT_APP_BASE_URL= http://localhost:5000
-and then restart the server.

(-------------------------------HOW TO NAVIGATE ------------------------------------)
-ON RUNNING YOU WILL LAND ON THE LOGIN PAGE .
-YOU WILL HAVE TO CREATE AN ACCOUNT SO FIRST NAVIGATE TO SignUp PAGE .
-ON SUCCESFUL SIGNUP YOU WILL BE NAVIGATED TO THE HOME PAGE WHERE YOU CAN ADD TASK AND SEE THE LIST OF TASKS

