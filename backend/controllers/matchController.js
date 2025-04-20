const Matches = require('../models/matchModel')
const Users = require('../models/userModel')
const Profiles = require('../models/profileModel')

//adding matches
exports.addMatch=async(req,res)=>{
    try{
        const {currentUser,matchUser,status}=req.body;
        const newMatch=new Matches({
            currentUser,matchUser,status
        })
        const savedMatch = await newMatch.save()
        res.status(201).json({message:'Match added successfully.'})
    }
    catch(err){
        return res.status(500).json({message:'Error adding match.'})
    } 
}

//fetches all favorites
exports.getMatches=async(req,res)=>{
    try{
        const matches= await Matches.find()
        return res.status(200).json(matches)
    }
    catch(err){
        return res.status(500).json({message:'Error adding match.'})
    } 
}

//fetch match based on ID
exports.getMatch=async(req,res)=>{
    try{
        const id = req.params.id;
        const match = await Matches.findById(id)
        return res.status(200).json(match)
    }
    catch(err){
        return res.status(500).json({message:'Error adding match.'})
    } 
}

//deletes match based on ID
exports.deleteMatches=async(req,res)=>{
    try{
        const id = req.params.id;
        const match = await Matches.findByIdAndDelete(id)
        return res.status(200).json({message:'Deleted successfully'})
    }
    catch(err){
        return res.status(500).json({message:'Error adding match.'})
    } 
}

//updates match based on ID
exports.updateMatches=async(req,res)=>{
    try{
        const id = req.params.id;
        const match = await Matches.findByIdAndUpdate(id,{$set:req.body},{new:true})
        return res.status(200).json({message:'Updated successfully'})
    }
    catch(err){
        return res.status(500).json({message:'Error adding match.'})
    } 
}

//fetches requested matches
exports.requestedMatch=async(req,res)=>{
    try{
        const userId=req.params.id;
        const matches= await Matches.find({currentUser:userId})
        return res.status(200).json(matches)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:'Error adding match.'})
    } 
}

//fetches waiting matches
exports.waitingMatch=async(req,res)=>{
    try{
        const userId=req.params.id;
        const user= await Users.findById(userId)
        const waiting = await Profiles.findOne({email:user.email,phone:user.phone})
        const match = await Matches.find({matchUser:waiting._id})
        
        return res.status(200).json(match)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:'Error adding match.'})
    } 
}

//fetches waiting profile
exports.waitingProfile=async(req,res)=>{
    try{
        const userId=req.params.id;
        const user= await Users.findById(userId)
        const waiting = await Profiles.findOne({email:user.email,phone:user.phone})
        return res.status(200).json(waiting)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:'Error adding match.'})
    } 
}