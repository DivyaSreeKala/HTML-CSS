
const express = require('express');
const app = new express();

const morgan = require('morgan')
app.use(morgan('dev'))


const movieRoutes = require('./Routes/movieRoutes');
app.use('/movies',movieRoutes)


require('dotenv').config();
const PORT = process.env.PORT//get the environment variable from .env file


require('./db/connection')//require the path of the file

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})