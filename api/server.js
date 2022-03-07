require('dotenv').config({ path: '../.env' })
const express = require('express')
const app = express()
const PORT = process.env.PORT
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')

connectDB()

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

// app.use(errorHandler)

const server = app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`)
})

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})






