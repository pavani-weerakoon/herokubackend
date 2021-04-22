const mongoose=require('mongoose');

const mobileRecommendationSchema = new mongoose.Schema({

    phone_name: {
        type: String,
        required: true
    },
    phone_image: {
        type: String,
        required: true
    },
    average_rating: {
        type: Number,
        required: true
    },
    network_gprs:{
        type: String,
        required: true
    },
    network_edge:{
        type: String,
        required: true
    },
    launch_announced:{
        type: String,
        required: true
    },
    launch_status:{
        type: String,
        required: true
    },
    body_dimensions:{
        type: String,
        required: true
    },
    predicted_price:{
        type: Number,
        required: true
    },
    body_sim:{
        type: String,
        required: true
    },
    display_type:{
        type: String,
        required: true
    },
    display_size:{
        type: String,
        required: true
    },
    display_resolution:{
        type: String,
        required: true
    },
    platform_os:{
        type: String,
        required: true
    },
    platform_cpu:{
        type: String,
        required: true
    },
    sound_loudspeaker:{
        type: String,
        required: true
    },
    sound_jack:{
        type: String,
        required: true
    },
    features_sensors:{
        type: String,
        required: true
    },
    battery:{
        type: String,
        required: true
    }

},{collection:'phone_recommendation'});

module.exports = mongoose.model('phone_recommendation', mobileRecommendationSchema);
//
