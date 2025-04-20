//including required features

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 3000

const app = express()

dotenv.config() //using .env files
app.use(cors()) //activating cors
app.use(express.json()) //using json format

//importing required routes
const profileRoutes = require('./routes/profileRoutes')
const contactRoutes = require('./routes/contactRoutes')
const reportRoutes = require('./routes/reportRoutes')
const userRoutes = require('./routes/userRoutes')
const matchRoutes = require('./routes/matchRoutes')
const favRoutes = require('./routes/favRoutes')

//mongodb connection establishment
mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('Connected'))
    .catch((err)=>console.log(err))

//using routes
app.use('/api',profileRoutes)
app.use('/api',contactRoutes)
app.use('/api',reportRoutes)
app.use('/api',userRoutes)
app.use('/api',matchRoutes)
app.use('/api',favRoutes)

//running app on desired port
app.listen(PORT,()=>{
    console.log(`Server successfully running on http://localhost:${PORT}`)
})

