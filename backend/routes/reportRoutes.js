const express = require('express')
const { addReport, getReports, getReport, updateReport, deleteReport } = require('../controllers/reportController')
const router = express.Router()

router.post('/report',addReport )
router.get('/report',getReports)
router.get('/report/:id',getReport)
router.put('/report/:id',updateReport)
router.delete('/report/:id',deleteReport)

module.exports=router;