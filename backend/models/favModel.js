//favorites data model

const mongoose= require('mongoose')

const favSchema = new mongoose.Schema({
    currentUser:{type:String,required:true},
    favorite:{type:String,required:true},
    favName:{type:String,required:true},
    favJob:{type:String,required:true},
    favSalary:{type:String,required:true},
    favPic:{type:String,required:true},

})

const Favorites = mongoose.model('Favorites',favSchema)
module.exports=Favorites;