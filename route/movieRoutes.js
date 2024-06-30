const express = require('express')
const router = express.Router()
const Movie = require('../model/movie');
const Cast = require('../model/cast');
const Show = require('../model/show');
router.get('/', async(req, res, next) => {
    try{
      const movies = await Movie.find({});
      res.status(200).json(movies)
    }
    catch(error){
     res.status(500).send('error occured')
    }
   
    
   })
   
   router.get('/:movieId', async(req, res, next)=>{
     try{
       const movie = await Movie.findById(req.params.movieId);
       res.status(200).json(movie)
     }
     catch(err){
        res.status(404).send("movie of given Id not found")
     }
   })

   router.get('/:movieId/shows', async(req, res, next)=>{
    try{
      const shows = await Show.find({movie: req.params.movieId}).populate('screen')
      res.status(200).json(shows)
    }
    catch(err){
       res.status(404).send("movie of given Id not found")
    }
  })

   router.get('/:movieId/cast', async(req, res, next)=>{
    try{
      const casts = await Cast.find({ movie: req.params.movieId }).populate('person')
      res.status(200).json(casts)
    }
    catch(err){
       res.status(404).send("movie of given Id not found")
    }
  })
   
   router.post('/', async(req, res, next) => {
     try{
       const movie = new Movie(req.body)
       await movie.save();
       res.status(201).json(movie)
     }
     catch(error){
      res.status(500).send('error occured')
     }
    
     
    })
    module.exports = router