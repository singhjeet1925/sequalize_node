const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const db = require("../../models")
const customerDetails = db.customerDetails;
const orderDetails = db.orderDetails;
// const productDetails = db.productdetails;

const getAllDetails = async () => {
    try {
        const result = await customerDetails.findAll({
            // include: orderDetails
            // attributes: ['id','firstName','lastName', 'email',]
            include: {
                model: orderDetails,
                // as: 'customerdetails',
                
            }
        });
        console.log("data", result)
        return result
    } catch (err) {
        // throw new (err)
        console.log(err)
    }
}
const postAllDetails = async (data) => {
    try {
        const {firstName,lastName,email,contact,address,userName,password}=data

        var token = jwt.sign({ email:email }, 'mysecret');
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password,salt)
        const result = await customerDetails.create({
            firstName,
            lastName,
            email,
            contact,
            address,
            userName,
            password: hash,
            token
        })
        if (result && result.id) {
            await orderDetails.create({
                orderNo: 1,
                sellerName: "ram",    
                sellerId: 1214,
                customerId: result.id,
                customerDetailId:result.id
            })
        }
        console.log("data", result)
        return result
    } catch (err) {
        // throw new (err)
        console.log(err)
    }
}

module.exports = {
    getAllDetails,
    postAllDetails
}