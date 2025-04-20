const Profile = require('../models/profileModel')

//adding profile
exports.addProfile=async(req,res)=>{
    try{
        const {name,
            birthTime,
            fathersName,
            dob,
            gender,
            education,
            email,
            house,
            siblingMarriage,
            mothersName,
            phone,
            maritalStatus,
            resiAddress,
            perAddress,
            religion,
            expectation,
            caste,
            pic01,
            job,
            pic02,
            jadhagam,
            salary,approval} = req.body;
            if(!name || !birthTime || !fathersName || !dob || !gender || !education || !email || !house || !siblingMarriage || !mothersName || !phone || !maritalStatus || !resiAddress || !perAddress || !religion || !expectation || !caste || !pic01 || !job || !pic02 || !jadhagam || !salary || !approval){
                return res.status(500).json({message:"Please fill all the required details!"})
            }

            const newProfile = new Profile({
                name,
            birthTime,
            fathersName,
            dob,
            gender,
            education,
            email,
            house,
            siblingMarriage,
            mothersName,
            phone,
            maritalStatus,
            resiAddress,
            perAddress,
            religion,
            expectation,
            caste,
            pic01,
            job,
            pic02,
            jadhagam,
            salary,
            approval
            })
            const savedProfile = newProfile.save()
            res.status(201).json({message:"Profile added successfully."})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//fetches all profile
exports.getProfiles=async(req,res)=>{
    try{
        const profiles = await Profile.find()
        res.status(200).json(profiles)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//fetches approved profiles
exports.getApprovedProfiles=async(req,res)=>{
    try{
        const profiles = await Profile.find({approval:'approved'})
        res.status(200).json(profiles)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//fetches rejected profiles
exports.getRejectedProfiles=async(req,res)=>{
    try{
        const profiles = await Profile.find({approval:'rejected'})
        res.status(200).json(profiles)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//fetches pending profiles
exports.getPendingProfiles=async(req,res)=>{
    try{
        const profiles = await Profile.find({approval:'pending'})
        res.status(200).json(profiles)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//fetch profile based on ID
exports.getProfile=async(req,res)=>{
    try{
        const id=req.params.id;
        const profile = await Profile.findById(id)
        res.status(200).json(profile)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//deletes profile based on ID
exports.deleteProfile=async(req,res)=>{
    try{
        const id=req.params.id;
        const profile = await Profile.findByIdAndDelete(id)
        res.status(200).json({message:"Deleted successfully."})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//updates profile based on ID
exports.updateProfile=async(req,res)=>{
    try{
        const id=req.params.id;
        const updatedProfile = await Profile.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json(updatedProfile)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//fetches current profile
exports.getCurrentProfile=async(req,res)=>{
    const {email,phone}=req.query;
    if(!email || !phone){
        return res.status(400).json({message:"Email and Phone are required details!"})
    }
    try{
        const profile = await Profile.findOne({email:email,phone:phone})
        res.status(200).json(profile);
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}

//search profiles
exports.searchProfile= async (req, res) => {
    const q = req.query.q?.toString().trim();
  
    let profile;
    if (!q) {
      profile = await Profile.find({approval:'approved'});
    } else {
      profile = await Profile.find({ approval:'approved',
        $or: [
          { name: { $regex: q, $options: 'i' } },
          { religion: { $regex: q, $options: 'i' } },
          { job: { $regex: q, $options: 'i' } }
        ]
      });
    }
  
    res.status(200).json(profile);
  };