const express = require('express')
const { addMatch, getMatches, requestedMatch, waitingMatch, deleteMatches, waitingProfile, getMatch, updateMatches } = require('../controllers/matchController')
const router = express.Router()

router.post('/match',addMatch)
router.get('/match',getMatches)
router.get('/match/:id',getMatch)
router.delete('/match/:id',deleteMatches)
router.put('/match/:id',updateMatches)
router.get('/requested-match/:id',requestedMatch)
router.get('/waiting-match/:id',waitingMatch)
router.get('/waiting-profile/:id',waitingProfile)

module.exports=router;