const mongoose=require('mongoose')


const UserSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    },
    type:{
        type:String,
        required:true
    },
    agence:{
        type:String,
        required:false
    },
    lieu:{
        type:String,
        required:false
    }

})

module.exports = mongoose.model('user', UserSchema)