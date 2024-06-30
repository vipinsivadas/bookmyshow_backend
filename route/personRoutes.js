const express = require('express')
const router = express.Router()
const Person = require('../model/person');

router.get('/', async(req, res, next) => {
    try{
      const persons = await Person.find({});
      res.status(200).json(persons)
    }
    catch(error){
     res.status(500).send('error occured')
    }
   
   
    
   })
  
   router.post('/', async(req, res, next) => {
    try{
      const person = new Person(req.body)
      await person.save();
      res.status(201).json(person)
    }
    catch(error){
     res.status(500).send('error occured')
    }
   
    
   })

module.exports = router