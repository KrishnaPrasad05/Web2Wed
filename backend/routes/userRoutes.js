const express = require('express')
const router = express.Router()
const { getUsers, getUser, deleteUser,updateUser, addUser, loginUser } = require('../controllers/userController')


/* router.post('/user',addUser) */
router.get('/user',getUsers)
router.get('/user/:id',getUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)
router.post('/user',addUser)
router.post('/login',loginUser)


module.exports=router;