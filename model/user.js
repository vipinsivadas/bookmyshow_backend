const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name: {
    type: String,
    require: true
   },
   email: {
    type: String,
    require: true
   },
   password: {
    type: String,
    
   }
    
  });

  const User = mongoose.model('User', userSchema);

  module.exports = Cast