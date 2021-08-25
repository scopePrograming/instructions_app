// Express 
const express = require('express')

// Database
require('../database/connection')

// To used router
const userRoute = require('../routes/user.route')

// Fire to used express
const app = express()

// Used express json
app.use(express.json())

// Used router for users
app.use(userRoute)

// Exports
module.exports = app



