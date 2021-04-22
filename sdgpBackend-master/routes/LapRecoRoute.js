const express = require('express');
const PredictionController = require('../controller/PredictionController');
const router = express.Router();


router.get('/checkPhone', PredictionController.phonePrediction);
router.get('/getAllPhone', PredictionController.getAllPhoneData);
router.get('/checkLaptop',PredictionController.laptopPrediction);

module.exports = router;
