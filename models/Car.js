const mongoose = require('mongoose')

const CarSchema = mongoose.Schema ({

user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
},    
modele:{
    type: String,
    required: true
},
energie:{
    type: String,
    required: true
},
couleur:{
    type: String,
    required: true
},
image:{
    type: String,
    required: true
},
phone:{
    type: String,
    required: true
},
prix:{
    type: String,
    required: true
},
date:{
    type: Date,
    default: Date.now
}
})

module.exports = mongoose.model('car', CarSchema)