// To used express
const express = require('express')

// Store express router to used
const router = express.Router()

// Instruction controllers
const instructionController = require('../controllers/instructions.controller')

// Auths
const auth = require('../middleware/auth')

// Replay on the users
router.post(
    '/admin/addInstruction',
    auth.adminAuth,
    // instructionController.upload.fields(
    //     [
    //         { name: "fileName", maxCount: 1 },
    //         // { name: "FILES", maxCount: 5 }
    //     ]
    // ),
    instructionController.upload.single('fileName'),
    instructionController.addInstruction
)

// To export router
module.exports = router