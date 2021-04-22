const express = require('express');
const MobileRecoController = require('../controller/RecommendationController');
const router = express.Router();

router.get('/checkMobileRecommendation', MobileRecoController.phoneRecommendation);
router.get('/checkMobileRecommendation02', MobileRecoController.phoneRecommendation02);
router.get('/checkMobileRecommendation03', MobileRecoController.phoneRecommendation03);
router.get('/checkMobileRecommendation04', MobileRecoController.phoneRecommendation04);




module.exports = router;
