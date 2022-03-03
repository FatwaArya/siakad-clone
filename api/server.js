require('dotenv').config({ path: '../.env'})
const express = require('express')
const app = express()
const PORT = process.env.PORT
const connectDB = require('./config/db')

connectDB()

// si express.json iki gunane opo
// iki kok ga enek next e cara kerjane pie
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

const server = app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`)
})

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})





