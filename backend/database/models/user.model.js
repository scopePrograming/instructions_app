// To used mogoose
const mongoose = require('mongoose')


// To used validator
const validator = require('validator')

// Create user schema
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    lasttName: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('Invalid email')
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 8,
        maxlength: 30
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        unique: [true, `Phone has token`],
        validate(value) { // We need to valid all world
            if (!validator.isMobilePhone(value,'ar-EG' )) throw new Error('invalid phone')
        }
    },
    userImage: {
        type: String,
        trim: true
    },
    tokens: [
        {
            token: { type: String }
        }
    ]
}, { timestamps: true } )