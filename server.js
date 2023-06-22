const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
mongoose.connect('mongodb://localhost:27017/health-help-db', {useNewUrlParser: true})
.then(()=> console.log('Connected to db'))
.catch(err => console.log(err))

// Routes
app.use('/api/nurses', require('./routes/nurseRoutes.js'))

// Error Handling
app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, ()=>{
    console.log('the server is running on port 9000')
})