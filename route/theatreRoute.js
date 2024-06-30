const express = require('express')
const router = express.Router()
const Theatre = require('../model/theatre');

router.get('/', async(req, res, next) => {
    try{
      const theatres = await Theatre.find({});
      res.status(200).json(theatres)
    }
    catch(error){
     res.status(500).send('error occured')
    }
   
    
   })
  
   router.post('/', async(req, res, next) => {
    try{
      const theatre = new Theatre(req.body)
      await theatre.save();
      res.status(201).json(theatre)
    }
    catch(error){
     res.status(500).send('error occured')
    }
   
    
   })

module.exports = router