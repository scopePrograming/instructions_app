const mongoose = require("mongoose");
const Schema = mongoose.Schema

const tokenSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
        ref: 'User'
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600,
    },
})

module.exports = mongoose.model("Token", tokenSchema)