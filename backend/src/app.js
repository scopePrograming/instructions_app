// Express 
const express = require('express')

// Database
require('../database/connection')

// To used router
const userRoute = require('../routes/user.route')
const instructionsRoute = require('../routes/instructions.route')

// Fire to used express
const app = express()

// Used express json
app.use(express.json())

// Used router 
app.use(userRoute)
app.use(instructionsRoute)

// Exports
module.exports = app



