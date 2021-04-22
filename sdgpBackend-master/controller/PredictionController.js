const PriceSchema = require('../model/PricesDTO');
const LaptopSchema = require('../model/LaptopDTO');


const phonePrediction = async (req, resp) => {
    const phone_name= req.headers.email;
    console.log(phone_name);

    if(phone_name !=null){
        PriceSchema.findOne({phone_name : phone_name},(error, result) =>{
            if(result !=null){
                let lastItem = result.prices.length;
                const currentPrice = result.prices[lastItem-1].Price;
                resp.status(200).json({message: result.predicted_price , current_price : currentPrice});
                console.log(result.prices[lastItem-1].Price);
            }else{
                resp.status(200).json({message: 'No data exists.'});
            }
        });
    }else {
        resp.status(200).json({message: 'Failed!'});
    }
}

const laptopPrediction = async (req, resp) => {
    const laptop_name= req.headers.email;
    console.log(laptop_name);

    if(laptop_name !=null){
        LaptopSchema.findOne({laptop_name : laptop_name},(error, result) =>{
            if(result !=null){
                let lastItem = result.laptop_prices.length;
                const currentPrice = result.laptop_prices[lastItem-1].Price;
                resp.status(200).json({message: result.laptop_predicted_price , current_price : currentPrice});
                console.log(result.laptop_predicted_price);
            }else{
                resp.status(200).json({message: 'No data exists.'});
            }
        });
    }else {
        resp.status(200).json({message: 'Failed!'});
    }
}




const getAllPhoneData = (req, resp) => {
    try {
        // pagination
        PriceSchema.find().then(result => {
            const predictedPrice = result.predicted_price;
            const phoneName = result.phone_name;
            const currentPrice = result.prices;
            resp.status(200).json({pPrice:predictedPrice , phone: phoneName});
            console.log(phoneName);
            alert('show');

        }).catch(exception => {
            resp.status(500).json({error: exception});
        })
    } catch (e) {/*JSON*/
        resp.status(500).json({error: e});
    }
}

module.exports = {
    phonePrediction,getAllPhoneData,laptopPrediction
}
