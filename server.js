const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')

// Middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", 'dist')))

// Connect to DB
mongoose.connect('mongodb+srv://tylerferre:hXq45dJcvmwJkGBN@cluster0.fvepsva.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})
.then(()=> console.log('Connected to db'))
.catch(err => console.log(err))

// Routes
app.use('/api/nurses', require('./routes/nurseRoutes.js'))

// Error Handling
app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})

app.listen(9000, ()=>{
    console.log('the server is running on port 9000')
})

