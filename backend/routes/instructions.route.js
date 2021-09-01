// To used express
const express = require('express')

// Store express router to used
const router = express.Router()

// Auths
const auth = require('../middleware/auth')

// Instruction controllers
const instructionController = require('../controllers/instructions.controller')

// Replay on the users (add instructions)
router.post(
    '/admin/addInstruction',
    auth.adminAuth,
    instructionController.uploadFile.single('fileName'),
    instructionController.addInstruction
)

// Show all instructions
router.post('/admin/showInstructions', auth.adminAuth, instructionController.showAllInstructions)

// Show all instructions for user (by user)
router.post('/user/showInstruction', auth.userAuth, instructionController.showAllInstructionsUser)

// Download files by users
router.get('/user/fileDownload/:fileName', auth.userAuth, instructionController.downloadFile)

// Show all instructions for one user
router.get('/admin/showInstructionsUser/:id', auth.adminAuth, instructionController.showAllInstructionsForUser)

// Show single instruction
router.get('/admin/showSingleInstruction/:id', auth.adminAuth, instructionController.showSingleInstruction)

// Edit single instruction
router.patch(
    '/admin/editSingleInstruction/:id',
    auth.adminAuth,
    instructionController.uploadFile.single('fileName'),
    instructionController.editSingleInstruction
)

// Delete single instruction
router.delete(
    '/admin/deleteSingleInstruction/:id',
    auth.adminAuth,
    instructionController.deleteSingleInstruction
)

// To export router
module.exports = router