const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

const db = "mongodb+srv://amine12345:amine12345@location-hprmu.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true }, (err) => {
    if(err){
        throw err
    }
    else{
            console.log("Database conncted...")
        
    }
})

app.use('/api/user', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/car', require('./routes/cars'))

app.listen(8080, (err) => {
    if(err){
        throw err
    }
    else{
            console.log("server is up and running on port 8080")
        }
    })