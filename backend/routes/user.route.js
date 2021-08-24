// To used express
const express = require('express')

// Store express router to used
const router = express.Router()

// Testing route
router.get('/users', (req, res) => {
    res.send(`That's fantastic`)
})



// To export router
module.exports = router