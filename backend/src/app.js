// Express 
const express = require('express')

// To used router
const userRoute = require('../routes/user.route')

// Fire to used express
const app = express()

// Used router for users
app.use(userRoute)


module.exports = app



