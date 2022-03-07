const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide username"],
        unique: true,
        trim: true,
        minlength: [3, "Username must be at least 3 characters"],
        maxlength: [20, "Username must be at most 20 characters"]

    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email must be valid')
            }
        }
    },
    password: {
        type: String,
        required: [true, "please add password"],
        minlength: 8,
        select: false,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password must not contain "password"')
            }
        }

    }, tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
    ,
    resetPasswordToken: String,
    resertPasswordExpire: Date
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.getSignedToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user.id.toString() }, 'nodecourse',
        { expiresIn: '1h' })

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token

}

const User = mongoose.model("User", userSchema)

module.exports = User