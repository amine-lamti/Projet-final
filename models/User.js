const mongoose=require('mongoose')

const Userschema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    loaction:{
        type:String,
        required:true
    },
    agencyname:{
        type:String,
        required:true
    },type:{
        type:String,
        required:true
    }
   , Date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('User',Userschema)