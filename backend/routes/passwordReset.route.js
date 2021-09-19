const User = require("../database/models/user.model")
const Token = require("../database/models/token.model")
const sendEmail = require("../utils/sendEmail")

const crypto = require("crypto")

const Joi = require("joi")

const express = require("express")
const router = express.Router()

router.post("/", async (req, res) => {
    try {
        // const schema = Joi.object({ email: Joi.string().email().required() });
        // const { error } = schema.validate(req.body);
        // if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findOne({ email: req.body.email })
        if (!user)
            return res.status(400).send("user with given email doesn't exist")

        let token = await Token.findOne({ user_id: user._id })
        if (!token) {
            token = await new Token({
                user_id: user._id,
                token: crypto.randomBytes(32).toString("hex")
            }).save()
        }

        const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`
        await sendEmail(user.email, "Password reset", link)

        res.send("password reset link sent to your email account")
    } catch (error) {
        res.send("An error occured")
    }
})

router.post("/:user_id/:token", async (req, res) => {
    try {
        // const schema = Joi.object({ password: Joi.string().required() })
        // const { error } = schema.validate(req.body);
        // if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findById(req.params.user_id)
        if (!user) return res.status(400).send("invalid link or expired")
        
        const token = await Token.findOne({
            user_id: user._id,
            token: req.params.token,
        })
        if (!token) return res.status(400).send("Invalid link or expired")

        user.password = req.body.password
        await user.save()
        await token.delete()

        res.send("password reset sucessfully.")
    } catch (error) {
        res.send("An error occured")
    }
})

module.exports = router