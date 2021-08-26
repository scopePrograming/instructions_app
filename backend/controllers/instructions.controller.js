// Requires
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const Instructions = require('../database/models/instructions.model')
const User = require('../database/models/user.model')
const { pathToFileURL } = require('url')

let fileName = ''

// Uplaoded file
// const uploadedFiles = () => {
const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb (null, 'uploads') },
    filename: function (req, file, cb) {
        // fileName = `${Date.now()}.${(file.originalname.split('.').pop())}`
        fileName = `${Date.now()}_${file.originalname}`
        cb (null, fileName)
    }
})
const upload = multer({ storage })
    // return upload
// }

// Replay on the users
const addInstruction = async (req, res) => {
    try {
        let user = await User.findById(req.body.user_id)
        if (user == null) throw new Error(`User not founded`)
        let instruction = new Instructions({ ...req.body })
        instruction.fileName = fileName
        instruction.filePath = req.file.path
        
        await instruction.save()
        res.status(200).send({
            apiStatus: true,
            success: instruction,
            message: `Data inserted`
        })
    }
    catch (error) {
        res.status(500).send({
            apiStatus: false,
            result: error,
            message: `Check data to insert`
        })
    }
}

// Show all instructions
const showAllInstructions = async (req, res) => {
     try {
        let instruction = await Instructions.find()
        if (instruction == '') throw new Error(`Data not founded`)
        res.status(200).send({
            apiStatus: true,
            success: instruction,
            message: `All data for users`
        })
     }
     catch (error) {
        res.status(500).send({
            apiStatus: false,
            result: error.message,
            message: `Not found! Check data`
        })
    }
}






// Exports
module.exports = {
    upload,
    addInstruction,
    showAllInstructions
}