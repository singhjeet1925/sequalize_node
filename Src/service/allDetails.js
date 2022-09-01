const allDetailsControler = require("../controller/allDetails")
// const { Model} = require('sequelize');

const getAllDetails = async(req,res)=>{
    // Model.findAll
    allDetailsControler.getAllDetails()
    .then(result => {
        res.status(200).json({
            message: "ALL details fetch successfully",
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


const postAllDetails = (req, res) => {
    const data = req.body
    allDetailsControler.postAllDetails(data)
    .then(result => {
        res.status(200).json({
            message: "ALl details fetch successfully",
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

module.exports = {
    getAllDetails,postAllDetails
}