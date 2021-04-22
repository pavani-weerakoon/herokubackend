const mongoose=require('mongoose');

const predictSchema = new mongoose.Schema({

    date: {
        type: String,
        required: true
    },
    prices: {
        type:Array,
        01 :{
            Price: {
                type: Number,
                required: true
            }
        }
    },
    phone_name: {
        type: String,
        required: true
    },
    predicted_price:{
        type: Number,
        required: true
    }
},{collection:'phone_prediction'});

module.exports = mongoose.model('phone_prediction', predictSchema);
