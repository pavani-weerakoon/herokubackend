const PhoneRecoSchema = require('../model/MobiReccoDTO');



let mobile01 = ['Redmi Note 9S 64GB','Redmi Note 9S 128GB','Xiaomi Redmi 9C ','Sony Xperia M4 Aqua','Oppo A12','Oppo A15','Nokia 3.4 32GB','Nokia 3.4 64GB','Nokia C3',
'Nokia C1 Plus','Xiaomi Redmi Note 7 Pro','Huawei Y7 Pro','Huawei Y7','Huawei Y5p','Huawei Y6p','Huawei Y7p','Samsung Galaxy A10s','Samsung Galaxy A01'];
let mobile02 = ['Samsung Galaxy A21s 128GB','Samsung Galaxy A21s 64GB','Samsung Galaxy M21','Samsung Galaxy M31 ','Huawei Y7a','Huawei nova 7i','Huawei Y9s'
,'Huawei Y9s','Apple iPhone 8','Oppo A53','Oppo A31','Nokia 5.3','Nokia 5.4 128GB','Nokia 5.4 64GB','Oppo F17','Oppo A52','Sony Xperia C4 Dual LTE','Xiaomi Poco X3 NFC ',
'Xiaomi Redmi Note 9 ','Xiaomi Poco M3 '];
let mobile03 = ['One plus nord' , 'Oppo Reno3' , 'Apple iPhone SE' , 'Samsung Galaxy M51 ', 'Samsung Galaxy A71 ', 'Oppo Reno3'];
let mobile04 = ['One plus 8' ,'One plus 8T','Apple iPhone 12 Pro Max','Apple iPhone 11 Pro Max','Apple iPhone 11 ','Apple iPhone 12 Pro','Huawei  P40 Pro','Samsung Galaxy S21','Samsung Galaxy S20 FE'
    ,'Samsung Galaxy S20','Samsung Galaxy Note20','Samsung Galaxy Note10'];


const phoneRecommendation = async (req, resp) => {


        // generating a random number
        const a = Math.floor(Math.random() * (mobile01.length - 1)) + 1;
        console.log(a);


        if (mobile01[a] != null ) {
            PhoneRecoSchema.findOne({phone_name: mobile01[a]}, (error, result) => {
                if (result != null) {

                     const deviceName = result.phone_name;
                     const deviceImage = result.phone_image;
                     const price = result.predicted_price;
                     console.log(deviceName);
                     console.log(deviceImage);
                     console.log(price);

                     resp.status(200).json({messageName01:deviceName , massageImage:deviceImage,messagePrice01:price});

                } else {
                    resp.status(200).json({message: 'No data exists.'});
                }
            });

        } else {
            resp.status(200).json({message: 'Failed!'});
        }
}

const phoneRecommendation02 = async (req, resp) => {
    // generating a random number
    const b = Math.floor(Math.random() * (mobile02.length - 1)) + 1;
    console.log(b);

    if (mobile02[b] != null) {
        PhoneRecoSchema.findOne({phone_name: mobile02[b]}, (error, result) => {
            if (result != null) {

                const deviceName02 = result.phone_name;
                const deviceImage02 = result.phone_image;
                const price02 = result.predicted_price;
                console.log(deviceName02);
                console.log(deviceImage02);
                console.log(price02);

                resp.status(200).json({messageName02:deviceName02 , massageImage02:deviceImage02 , messagePrice02:price02});

            } else {
                resp.status(200).json({message: 'No data exists.'});
            }
        });

    } else {
        resp.status(200).json({message: 'Failed!'});
    }
}

const phoneRecommendation03 = async (req, resp) => {
    // generating a random number
    const c = Math.floor(Math.random() * (mobile03.length - 1)) + 1;
    console.log(c);

    if (mobile03[c] != null) {
        PhoneRecoSchema.findOne({phone_name: mobile03[c]}, (error, result) => {
            if (result != null) {
                const deviceName03 = result.phone_name;
                const deviceImage03 = result.phone_image;
                const price03 = result.predicted_price;
                console.log(deviceName03);
                console.log(deviceImage03);
                console.log(price03);

                resp.status(200).json({messageName03:deviceName03 , massageImage03:deviceImage03 , messagePrice03:price03});

            } else {
                resp.status(200).json({message: 'No data exists.'});
            }
        });

    } else {
        resp.status(200).json({message: 'Failed!'});
    }
}

const phoneRecommendation04 = async (req, resp) => {
    // generating a random number
    const d = Math.floor(Math.random() * (mobile04.length - 1)) + 1;
    console.log(d);

    if (mobile04[d] != null) {
        PhoneRecoSchema.findOne({phone_name: mobile04[d]}, (error, result) => {
            if (result != null) {
                const deviceName04 = result.phone_name;
                const deviceImage04 = result.phone_image;
                const price04 = result.predicted_price;
                console.log(deviceName04);
                console.log(deviceImage04);
                console.log(price04);
                resp.status(200).json({messageName04:deviceName04 , massageImage04:deviceImage04 , messagePrice04:price04});
            } else {
                resp.status(200).json({message: 'No data exists.'});
            }
        });

    } else {
        resp.status(200).json({message: 'Failed!'});
    }
}

module.exports = {
    phoneRecommendation,phoneRecommendation02,phoneRecommendation03,phoneRecommendation04
}
