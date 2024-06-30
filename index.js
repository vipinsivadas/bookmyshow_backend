const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors')
const Movie = require('./model/movie');
const Person = require('./model/person');
const Language = require('./model/language');
const movieRoutes = require('./route/movieRoutes')
const personRoutes = require('./route/personRoutes')
const languageRoutes = require('./route/languageRoutes')
const theatreRoutes = require('./route/theatreRoute')
const castRoutes = require('./route/castRoutes')
const screenRoutes = require('./route/screenRoutes')
const showRoutes = require('./route/showRoutes')
const bookingRoutes = require('./route/bookingRoutes')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/movies', movieRoutes)
app.use('/persons', personRoutes)
app.use('/languages', languageRoutes)
app.use('/casts', castRoutes)
app.use('/theatres', theatreRoutes)
app.use('/screens', screenRoutes)
app.use('/shows', showRoutes)
app.use('/bookings', bookingRoutes)



main().then(()=>console.log("db connected")).catch(err => console.log(err));

async function main() {

  const databaseUrl = process.env.DATABASE_URL
  const Urlwithpassword =  databaseUrl.replace('<password>', process.env.DB_PASSWORD)


  await mongoose.connect(Urlwithpassword);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})