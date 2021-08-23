// Call mongoose
const mogoose = require('mongoose')

// config to connect database
mogoose.connect(process.env.dbURL, {})