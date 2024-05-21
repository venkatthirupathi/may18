const mongoose=require('mongoose')
const studentschema=mongoose.Schema({_id:{
    type:Number,
    required:true
},
name:String,
phone:Number,
email:String
})
const studentmodel=mongoose.model('student',studentschema)
module.exports=studentmodel