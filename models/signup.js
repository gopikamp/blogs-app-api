const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "dob":{type:String,required:true},
        "email":{type:String,required:true},
        "gender":{type:String,required:true},
        "password":{type:String,required:true}
    }
)

let signupmodel = mongoose.model("signup",schema)
    module.exports = {signupmodel}