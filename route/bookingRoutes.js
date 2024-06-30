const express = require('express')
const router = express.Router()
const Booking = require('../model/booking');

router.get('/', async(req, res, next) => {
    try{
      const booking= await Booking.find(req.params, 'selectedSeat');
      res.status(200).json(booking)
    }
    catch(error){
     res.status(500).send('error occured')
    }
   
    
   })
   router.get('/:bookingId', async(req, res, next) => {
    try{
      const booking = await Booking.findById(req.params.showId).populate('screen');
      res.status(200).json(booking)
    }
    catch(error){
     res.status(500).send('error occured')
    }
   
    
   })

   
  
   router.post('/', async(req, res, next) => {
    try{
      const booking = new Booking(req.body)
      await booking.save();
      res.status(201).json(booking)
    }
    catch(error){
     res.status(500).send('error occured')
    }
   
   })

   router.delete('/:bookingId', async (req, res, next)=>{
    try{
     await  Booking.findByIdAndDelete(req.params.showId) 
     res.status(204).send("delete")
    }
    catch(error){
      res.status(404).send("Booking of request not found")

    }
   })

   

module.exports = router