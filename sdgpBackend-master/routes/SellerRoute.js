const express = require('express');
const SellerController =  require('../controller/SellerController');

const router = express.Router();

//post (save) [body]
router.post('/saveSeller', SellerController.saveSeller);
//get(fetch) [headers]
router.get('/getAllSeller', SellerController.getAllSellers);
//delete(delete) [headers]
router.delete('/deleteSeller', SellerController.deleteSeller);
//PUT(Update) [Body]
router.put('/updateSeller', SellerController.updateSeller);


module.exports = router;
