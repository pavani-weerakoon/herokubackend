////////////////////////////////////////////////////////
const mongoose = require('mongoose');
const SellerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    other:{
        type:Array
    }
});
module.exports = mongoose.model('Seller', SellerSchema);
/////////////////////////////////////////////////////////////////
