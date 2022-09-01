const orderController = require("../controller/order")
const insertOrderDetails = async (req, res) => {
    let data = req.body
    orderController.insertOrderDetails(data)
        .then(result => {
            res.status(200).json({
                message: "Order details inserted successfully",
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
const orderList = async(req,res)=>{
    orderController.orderList()
    .then(result => {
        res.status(200).json({
            message: "Order details fetch successfully",
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

const getAllOrderDetails = async(req,res) =>{
    orderController.getAllOrderDetails()
    .then(result => {
        res.send(200).json({
            message: "All Order Are Featched Succesfully..",
            response: result
        })
    }).catch(err=> {
        res.status(200).json({
            message: "something Wrong happen..",
            errmsg: err
        })
    })
}

module.exports = {
    insertOrderDetails,
    orderList,
    getAllOrderDetails
}