// Express 
const express = require('express')

// Path
const path = require('path')

// Cors
const cors = require('cors')

// Database
require('../database/connection')


// To used router
const userRoute = require('../routes/user.route')
const instructionsRoute = require('../routes/instructions.route')
const userInfoRoute = require('../routes/userInfo.route')


// Fire to used express
const app = express()

// Static upload folder
app.use(express.static('uploads'))


// Static public folder
app.use(express.static(path.join(__dirname, '../public/')))


// Used express json $ cors
app.use(express.json())
app.use(cors())

// Used router 
app.use(userRoute)
app.use(instructionsRoute)
app.use(userInfoRoute)

// Exports
module.exports = app



