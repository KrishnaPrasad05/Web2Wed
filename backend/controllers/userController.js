const Users = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')

//adding user
exports.addUser=async(req,res)=>{
    try{
        const {name,phone,email,password}=req.body
        if(!name || !email || !phone || !password){
            res.status(500).json({message:"Please fill required fields"})
        }
        const newUser= new Users({
            name,
            email,
            phone,
            password,
        })
        const savedUser = await newUser.save()
        res.status(201).json({message:"User added successfully."})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//fetches all users
exports.getUsers=async(req,res)=>{
    try{
        const users = await Users.find()
        res.status(200).json(users)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//fetch user based on ID
exports.getUser=async(req,res)=>{
    try{
        const id=req.params.id;
        const user = await Users.findById(id)
        res.status(200).json(user)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//deletes user based on ID
exports.deleteUser=async(req,res)=>{
    try{
        const id=req.params.id;
        const user = await Users.findByIdAndDelete(id)
        res.status(200).json({message:"User deleted successfully."})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//updates user based on ID
exports.updateUser=async(req,res)=>{
    try{
        const id=req.params.id;
        const user = await Users.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json(user)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//perform login operation by generation auth token
exports.loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const adminEmail = "admin50508@web2wed.com"
        const adminPassword = "admin"
        if(email===adminEmail && password===adminPassword){
            res.status(200).json({message:'admin'})
        }
        else{
            const user=await Users.findOne({email});
            if(!user){
                return res.status(400).json({message:"Invalid email or password"})
            }
           /*  const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch){
                return res.status(400).json({message:"password doesnt match"})
            } */
            
            const token = jwt.sign({userId:user._id},"secretcode",{expiresIn:'1h'})
            res.status(200).json({message:'Login successfull',token,userId:user._id,email:user.email,phone:user.phone})
            
        }
        
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}