// Require
const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


// Create user schema
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    lastName: {
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
        minlength: 8
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        unique: [true, `Phone has token`],
        validate(value) { // We need to valid all world
            if (!validator.isMobilePhone(value, 'ar-EG')) throw new Error('invalid phone')
        }
    },
    userType: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
        trim: true
    },
    imageName: {
        type: String,
        trim: true
    },
    imagePath: {
        type: String,
        trim: true
    },
    tokens: [
        {
            token: { type: String }
        }
    ]
}, { timestamps: true })

// Relations by collection schema
userSchema.virtual('instructionUser', {
    ref: 'Instructions',
    localField: '_id',
    foreignField: 'user_id'
})

userSchema.virtual('userInfo', {
    ref: 'userInfo',
    localField: '_id',
    foreignField: 'user_id'
})

// not show password
userSchema.methods.toJSON = function () {
    let user = this.toObject()
    itemsHidden = ['passsword']
    itemsHidden.forEach(item => {
        delete user[item]
    })
    return user
}

// Hashing password
userSchema.pre('save', async function () {
    try {
        let user = this
        if (user.isModified('password')) {
            user.password = await bcrypt.hash(user.password, 8)
        }
        return user
    } catch (error) {
        console.log(error.message)
    }
})

// addToken
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT)
    user.tokens = this.tokens.concat({ token })
    await user.save()
    return token
}

// Login 
userSchema.statics.logMeOn = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) throw new Error('invalid email')
    const matchPass = await bcrypt.compare(password, user.password)
    if (!matchPass) throw new Error('invalid pass')
    return user
}

// Exports
const User = mongoose.model('User', userSchema)
module.exports = User