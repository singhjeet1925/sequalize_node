const customerController = require("../controller/customerDetails")
const inserCustomerDetails = async (req, res) => {
    let data = req.body
    customerController.inserCustomerDetails(data)
        .then(result => {
            res.status(200).json({
                message: "customer details inserted successfully",
                response: result
            })
        })
        .catch(err => {
            res.status(200).json({
                message: "some thing going wrong",
                errmsg: err
            })
        })
}
const customerList = async(req,res)=>{
    customerController.customerList()
    .then(result => {
        res.status(200).json({
            message: "customer details fetch successfully",
            response: result
        })
    })
    .catch(err => {
        res.status(200).json({
            message: "some thing going wrong",
            errmsg: err
        })
    })  
}

// module.exports = {
//     inserCustomerDetails,
//     customerList
// }