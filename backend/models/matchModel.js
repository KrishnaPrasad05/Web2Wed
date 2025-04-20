//matches data model

const mongoose = require('mongoose')

const matches = new mongoose.Schema({
    currentUser:{type:String,required:true},
    matchUser:{type:String,required:true},
    status:{type:String,required:true},
})

const Matches = mongoose.model('Matches', matches);
module.exports = Matches;