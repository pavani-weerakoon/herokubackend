const express= require('express');
const mongoose= require('mongoose');

//to unblock the data which come from other servers
const cors= require('cors');
//for read the user data from sign-up and seller page
const bodyParser = require('body-parser');
//for env file.
require('dotenv').config();

//--------------------------------
const customer_login = require('./routes/AdminUserRoute');
////////////////////////////////////////////////////
const SellerRoute= require('./routes/SellerRoute');
////////////////////////////////////////////////////
const PredictPhone = require('./routes/PhoneRoute');
////////////////////////////////////////////////////
const RecommendedPhone = require('./routes/MobiRecoRoute')
////////////////////////////////////////////////////
//--------------------------------

//MVC Architecture  //model  //view  //controller

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

mongoose.connect(
    'mongodb+srv://Test:Test123@cluster0.wp80o.mongodb.net/PickerMe?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }
).then(()=>{
    app.listen(3000, ()=>{
        console.log('DB connected !');
        console.log('sdgp service Stared on port 3000');
    })
}).catch((error)=>{
    console.log(error);
});
///////////////////////////////////////////////////////





//------------------------------
app.use('/api/v1/adminUserRoute', customer_login);
app.use('/api/v1/sellerUserRoute', SellerRoute);
app.use('/api/v1/phonePredictRoute',PredictPhone);
app.use('/api/v1/phoneRecommendationRoute',RecommendedPhone);

//------------------------------
