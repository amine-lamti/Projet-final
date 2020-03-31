const mongoose = require('mongoose')

const CarSchema = mongoose.Schema ({

user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
},    
firstname:{
    type: String,
    required: true
},
lastname:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true
},
password:{
    type: String,
    required: true
},
phone:{
    type: Number,
    required: true
},
date:{
    type: Date,
    default: Date.now
}
})

module.exports = mongoose.model('car', CarSchema)