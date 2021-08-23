// Express 
const express = require('express')

// Fire to used express
const app = express()

app.get('/', (req, res) => {
    res.send(`Good`)
})

module.exports = app



