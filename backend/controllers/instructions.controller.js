// Requires
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const Instructions = require('../database/models/instructions.model')
const User = require('../database/models/user.model')

let fileName = ''

// Uplaoded file
// const uploadedFiles = () => {
const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb (null, 'uploads') },
    filename: function (req, file, cb) {
        fileName = `${Date.now()}.${(file.originalname.split('.').pop())}`
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


// Exports
module.exports = {
    upload,
    addInstruction
}