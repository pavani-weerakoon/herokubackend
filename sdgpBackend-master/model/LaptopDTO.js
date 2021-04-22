const mongoose=require('mongoose');

const laptopPredictSchema = new mongoose.Schema({

    date: {
        type: String,
        required: true
    },
    laptop_prices: {
        type:Array,
        01 :{
            Price: {
                type: Number,
                required: true
            }
        }
    },
    laptop_name: {
        type: String,
        required: true
    },
    laptop_predicted_price:{
        type: Number,
        required: true
    }
},{collection:'laptop_prediction'});

module.exports = mongoose.model('laptop_prediction', laptopPredictSchema);
