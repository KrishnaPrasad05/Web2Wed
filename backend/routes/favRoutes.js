const express = require('express')
const { getFav, addFav, delFav } = require('../controllers/favController')

const router = express.Router()

router.get('/fav/:id',getFav)
router.post('/fav',addFav)
router.delete('/fav/:id',delFav)

module.exports=router;