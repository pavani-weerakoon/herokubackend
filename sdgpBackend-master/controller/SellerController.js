const SellerDTO = require('../model/SellerDTO');

/*POST--> (body)*/
const saveSeller = (req, resp) => {
    try {

        console.log(req.body);

        const seller = new SellerDTO({
            title: req.body.title,
            description: req.body.description,
            mobileNo: req.body.mobileNo,
            image: req.body.image,
            other: req.body.other
        });

        seller.save().then(result => {
            resp.status(200).json({message: 'Post Created Successful!'});
        }).catch(exception => {
            console.log(exception);
            resp.status(500).json({error: exception});
        });


    } catch (e) {/*JSON*/
        resp.status(500).json({error: e});
    }
}

const updateSeller = (req, resp) => {
    // CustomerDTO.updateOne({_id: req.body.id}, {
    //     $set: {
    //         name: req.body.name,
    //         address: req.body.address,
    //         salary: req.body.salary
    //     }
    // }).then(result => {
    //     console.log(req.body.id);
    //     if (result.nModified>0) {
    //         resp.status(200).json({message: 'Updated!'});
    //     } else {
    //         resp.status(500).json({message: 'Try Again!'});
    //     }
    //
    // }).catch(error => {
    //     console.log(error);
    //     resp.status(500).json({error: error});
    // })
}

const deleteSeller = (req, resp) => {
    try {

        SellerDTO.deleteOne({_id: req.headers.id}).then(result => {

            if (result.deletedCount > 0) {
                resp.status(200).json({message: 'Post Deleted!'});
            } else {
                resp.status(500).json({message: 'Try Again!'});
            }

        }).catch(error => {
            resp.status(500).json({error: error});
        })

    } catch (e) {
        resp.status(500).json({error: e});
    }
}

const getSeller = (req, resp) => {

}

const getAllSellers = (req, resp) => {
    try {
        // pagination
        SellerDTO.find().then(result => {
            resp.status(200).json({dataSet: result});
            alert('show');

        }).catch(exception => {
            resp.status(500).json({error: exception});
        })
    } catch (e) {/*JSON*/
        resp.status(500).json({error: e});
    }
}

module.exports = {
    saveSeller, updateSeller, deleteSeller, getSeller, getAllSellers
}
