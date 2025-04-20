const Reports = require('../models/reportModel')

//adding reports
exports.addReport=async(req,res)=>{
    try{
        const {name,email,details}=req.body
        if(!name || !email || !details){
            res.status(500).json({message:"Please fill required fields"})
        }
        const newreport= new Reports({
            name,
            email,
            details
        })
        const savedreport = await newreport.save()
        res.status(201).json({message:"Report us added successfully."})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//fetches all reports
exports.getReports=async(req,res)=>{
    try{
        const reports = await Reports.find()
        res.status(200).json(reports)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//fetch report based on ID
exports.getReport=async(req,res)=>{
    try{
        const id=req.params.id;
        const report = await Reports.findById(id)
        res.status(200).json(report)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//deletes report based on ID
exports.deleteReport=async(req,res)=>{
    try{
        const id=req.params.id;
        const report = await Reports.findByIdAndDelete(id)
        res.status(200).json({message:"Reports us deleted successfully."})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//updates report based on ID
exports.updateReport=async(req,res)=>{
    try{
        const id=req.params.id;
        const report = await Reports.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json(report)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}