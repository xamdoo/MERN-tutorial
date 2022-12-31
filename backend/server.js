const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./Middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

//middleware function that parses incoming request bodies in the JSON format.
app.use(express.json())
// middleware function that parses incoming request bodies in the urlencoded format
// The extended option, when set to false, tells Express to use the querystring library to parse the request body. 
app.use(express.urlencoded({extended: false}))


app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`Server Started on port ${port}`))