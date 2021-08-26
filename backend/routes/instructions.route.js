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
    instructionController.upload.single('fileName'),
    instructionController.addInstruction
)


// Show all instructions
router.post('/admin/showInstructions', auth.adminAuth, instructionController.showAllInstructions)

// To export router
module.exports = router