const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')

const register = async (req, res, next) => {
    const { username, email, password } = req.body
    try {
        const user = await User.create({ username, email, password })
        sendToken(user, 201, res)
    } catch (error) {
        next(new ErrorResponse(error.message, 400))
    }
}



const login = async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return next(new ErrorResponse('Please provide email and password'), 401)
    }

    try {
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return next(new ErrorResponse('Invalid credentials'), 401)
        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return next(new ErrorResponse('Password does not match'), 404)
        }

        sendToken(user, 200, res)

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}

const forgotpassword = (req, res, next) => {
    res.send("forget password route")
}
const resetpassword = (req, res, next) => {
    res.send("reset password route")
}


module.exports = {
    register,
    login,
    forgotpassword,
    resetpassword
}
const sendToken = async (user, statusCode, res) => {
    try {
        const token = await user.getSignedToken()
        res.status(statusCode).send({ success: true, token })

    } catch (error) {
        res.status(500).send({ success: false, error: error.message })
    }





}


