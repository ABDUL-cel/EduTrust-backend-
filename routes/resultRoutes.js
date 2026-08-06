const express = require('express');
const router = express.Router();
const { checkResultStatus, verifyResultPayment } = require('../controllers/resultController');

// POST /api/results/check-status
router.post('/check-status', checkResultStatus);

// POST /api/results/verify-payment
router.post('/verify-payment', verifyResultPayment);

module.exports = router;
