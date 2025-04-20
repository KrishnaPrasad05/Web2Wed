const Contact = require('../models/contactModel')

//adding contacts
exports.addContact=async(req,res)=>{
    try{
        const {name,email,details}=req.body;
        console.log(req.body);
        if(!name || !email || !details){
            return res.status(400).json({message:"Please fill required fields"})
        }
        const newContact= new Contact({
            name,
            email,
            details
        })
        const savedContact = await newContact.save()
        return res.status(201).json({message:"Contact us added successfully."})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error",error: err.message})
    }
}

//fetches all contacts
exports.getContacts=async(req,res)=>{
    try{
        const contact = await Contact.find()
        res.status(200).json(contact)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//fetch contact based on ID
exports.getContact=async(req,res)=>{
    try{
        const id=req.params.id;
        const contact = await Contact.findById(id)
        res.status(200).json(contact)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//deletes contact based on ID
exports.deleteContact=async(req,res)=>{
    try{
        const id=req.params.id;
        const contact = await Contact.findByIdAndDelete(id)
        res.status(200).json({message:"Contact us deleted successfully."})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//updates contact based on ID
exports.updateContact=async(req,res)=>{
    try{
        const id=req.params.id;
        const contact = await Contact.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json(contact)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}