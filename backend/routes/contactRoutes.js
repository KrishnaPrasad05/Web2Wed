const express = require('express')
const { addContact, getContacts, getContact, updateContact, deleteContact } = require('../controllers/contactController')
const router = express.Router()

router.post('/contact',addContact)
router.get('/contact',getContacts)
router.get('/contact/:id',getContact)
router.put('/contact/:id',updateContact)
router.delete('/contact/:id',deleteContact)

module.exports=router;