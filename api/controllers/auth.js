const { restart } = require('nodemon')
const User = require('../models/User')

// kenapa ini functionnya di export satu2 padahal dia bisa di export semua jadi satu module
exports.register = async (req, res, next) => {
    const { username, email, password } = req.body
    try {
        const user = await User.create({
            username, 
            email, 
            password,
        })
        res.status(201).json({
            success: true,
            user
        }) 
    } catch (error) {
        res.status(500).json({         
            success: false,
            error: error.message  
        })
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body

    if(!email || !password){
        res.status(400).json({ success: false, error: "Please provide email and password" })
    }

    try{
        const user = await User.findOne({ email }).select("+password");

        if(!user) {
            res.status(404).json({ success: false, error: "invalid credentials"})
        }

        const isMatch = await user.matchPassword(password)
        if(!isMatch) {
            res.status(404).json({success: false, error: "invalid credentials"})
        }

        res.status(200).json({
            success: true,
            token: "tr34f34443fc"
        })

    }catch (error) {
        res.status(500).json({success:false, error: error.message})
    }
}

exports.forgotpassword = (req, res, next) => {
    res.send("forget password route")
}

exports.resetpassword = (req, res, next) => {
    res.send("reset password route")
}


