// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Languages: 
const booksController = require('./controllers/books.js')
app.use('/books', booksController)

// LISTEN
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})