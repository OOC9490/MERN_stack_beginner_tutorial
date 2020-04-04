const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); //allows .env files

//express server setup
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors()); //cors
app.use(express.json()); //allow server to parse json

//connect to mongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }); //from the mongoDB URI, starts the connection

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongoose DB connection established successfully");
})

// setting up routes
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exerciseRouter); //allows the application to load everything the variable has required from the file specified when the specified route is visited
app.use('/users', usersRouter);

//starts the server, express listens to the port passed into the listen function

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});