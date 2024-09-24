const mongoose = require('mongoose');

//Creating the schema
const movieSchema = mongoose.Schema({
    movieName : String,
    movieDirector : String,
    movieDescription : String,
    moviePrice : Number
})

//to map schema to collection name 
// to map to the collection name with the schema defined??
const movieData = mongoose.model('movie',movieSchema)
//first is collection name second is schema defined

module.exports = movieData;