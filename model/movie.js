const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    title: String,
    discription: String,
    Category: String,
    language: String,
    image: String,

    
  });

  const Movie = mongoose.model('Movie', movieSchema);

  module.exports = Movie