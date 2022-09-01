const loginControler = require("../controller/login")
// const { Model} = require('sequelize');

const loginDetails = (req, res) => {
    const data = req.body;
    loginControler.login(data)
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
    loginDetails
}