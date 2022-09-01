const customerDetailsController = require("../controller/customerDetails")

const getCustomerDetailsList = async(req, res,) => {
await customerDetailsController.inserCustomerDetails().then(result => {
  res.status(200).json({
    message: "customer details fetch successfully",
    response: result
  })
})
.catch(err => {
  res.status(500).json({
    message: "some thing went wrong",
    errmsg: err
  })
})
}

module.exports = {
  getCustomerDetailsList
}