# Chat App

## Prerequisites
1. Node.js
2. Mongo DB
3. Yarn (optional)

## Description
A basic implementation for a chat system with authentication with **jwt**, **Mongo DB** for storage, and **socket.io** for socket connection.
**Express.js** as backend server and **Ejs** for front-end.

## Run
`git clone https://github.com/rahulkantcs/chatappdb.git`

`cd chatappdb`

`yarn install` or `npm i`

`npm run dev`

## Setup
To connect to your preferred database update **localDB** in **db/index.js** <br>
For **jwt** update **middleware/Auth.js** <br>
For **sockets** update **socket/index.js** <br>
