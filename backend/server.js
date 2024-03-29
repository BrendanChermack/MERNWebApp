const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middeware allows parsing of json to the server              ////// to start server npm start serve
app.use(cors());
app.use(express.json());

//mongoose connection
mongoose.set("strictQuery", false);
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;

//mongoDB connection 
connection.once('open', () => {
    console.log('MongoDB database connection established');
})

const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);

//starts the server
app.listen(port, () => 
{
    console.log(`Server is running on port: ${port}`);
});