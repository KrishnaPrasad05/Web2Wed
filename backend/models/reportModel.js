//report data model

const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    details:{type:String,required:true},
})

const Reports = mongoose.model("Reports",reportSchema)
module.exports=Reports;