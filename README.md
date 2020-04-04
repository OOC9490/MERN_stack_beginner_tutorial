# MERN_stack_beginner_tutorial

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Source

[You can watch this video and follow along](https://www.youtube.com/watch?v=7CqJlxBYj-M)

## Commands you will need to install/run

### Note you will need to sign up for a mongoDB account:

[MongoDB sign-up](https://www.mongodb.com/download-center) and you will need to generate a UTI link to put in the the ".env" file with the backend directory.

(I created my cluster on AWS - Australia Region)

### I recommend setting up the backend/ frontend in the order below:

# BACKEND

- npm init -y (creates the package.json file which will enable npm to run in the directory)

- npm install express
- npm install cors
- npm install mongoose 
- npm install dotenv
- npm install -g nodemon (NOTE: this will install nodemon onto your machine, this allows your node.js applications to restart when file changes in their directory are detected)

- brew cask install insomnia (this is for testing requests towards your backend routes)

To run the server, type "nodemon server" in the backend directory

# FRONTEND

Just run "npm install" in the root of the cloned repo and npm will take care of things for you based on the package.json file (in fact this would probably work for the backend stuff too) 

## Available Scripts

In the project directory, you can run:
npm start
npm build
npm test
npm eject

BACKEND:
nodemon server (this starts and runs your backend server)

