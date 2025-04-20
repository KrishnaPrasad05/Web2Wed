const Favorites = require('../models/favModel')

//adding favorites
exports.addFav=async(req,res)=>{
    try{
        const {currentUser,favorite,favName,favJob,favSalary,favPic}=req.body;
        const newFav = new Favorites({
            currentUser,favorite,favName,favJob,favSalary,favPic
        })
        const savedFav = await newFav.save()
        res.status(201).json({message:'Added Successfully.'})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

//fetch favorite based on ID
exports.getFav=async(req,res)=>{
    try{
        const id = req.params.id;
        const fav = await Favorites.find({currentUser:id})
        res.status(200).json(fav)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

//deletes favorite based on ID
exports.delFav=async(req,res)=>{
    try{
        const id = req.params.id;
        const fav = await Favorites.findByIdAndDelete(id)
        res.status(200).json({message:'Deleted Successfully'})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}