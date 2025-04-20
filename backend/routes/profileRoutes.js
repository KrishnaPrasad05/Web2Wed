const express=require('express')
const { addProfile, getProfiles, getProfile, deleteProfile, updateProfile, getCurrentProfile, searchProfile, getApprovedProfiles, getRejectedProfiles, getPendingProfiles } = require('../controllers/profileController')
const router=express.Router()

router.post('/profile',addProfile)
router.get('/profile',getProfiles)
router.get('/profile-approved',getApprovedProfiles)
router.get('/profile-rejected',getRejectedProfiles)
router.get('/profile-pending',getPendingProfiles)
router.get('/profile/search',searchProfile)
router.get('/current-profile',getCurrentProfile)
router.get('/profile/:id',getProfile)
router.delete('/profile/:id',deleteProfile)
router.put('/profile/:id',updateProfile)

module.exports=router;