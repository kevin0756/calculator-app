const express = require('express');
const router = express.Router();

const calculatorController = require('../controllers/calculatorAPI')

router.post('/calculate-approximate-loan-amount/', calculatorController.calculateApproximateLoanAmount);
router.post('/calculate-accurate-loan-amount/', calculatorController.calculateAccurateLoanAmount);

module.exports = router;