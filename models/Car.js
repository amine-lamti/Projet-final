const mongoose = require('mongoose')

const CarSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    couleur:{
        type:String,
        required:true
    },
    
    image:{
        type:String,
        required:true
    }
    ,
    modele: {
        type: String,
        required: true
    },
    energie: {
        type: String,
        required: true
    },
    téléphone: {
        type: String,
        required: true
    },
    prix: {
        type: String,
        required: true
    },
    reservation:{
        type:Array,
        required:false
    }
    ,
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('car', CarSchema)