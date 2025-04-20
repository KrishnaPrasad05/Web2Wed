//profile data model

const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
        name:{type:String,required:true},
        birthTime:{type:String,required:true},
        fathersName:{type:String,required:true},
        dob:{type:String,required:true},
        gender:{type:String,required:true},
        education:{type:String,required:true},
        email:{type:String,required:true},
        house:{type:String,required:true},
        siblingMarriage:{type:String,required:true},
        mothersName:{type:String,required:true},
        phone:{type:String,required:true},
        maritalStatus:{type:String,required:true},
        resiAddress:{type:String,required:true},
        perAddress:{type:String,required:true},
        religion:{type:String,required:true},
        expectation:{type:String,required:true},
        caste:{type:String,required:true},
        pic01:{type:String,required:true},
        job:{type:String,required:true},
        pic02:{type:String,required:true},
        jadhagam:{type:String,required:true},
        salary:{type:String,required:true},
        approval:{type:String,required:true}
})

const Profile = mongoose.model("Profile",profileSchema)
module.exports=Profile;