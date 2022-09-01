const express = require("express")
const Router = express.Router()

// const customerService = require("../service/customer")
// const orderService = require("../service/order")
const findAllService = require("../service/allDetails")
const loginControler = require("../service/login")


// Router.post(`/create-new-customer`, customerService.inserCustomerDetails)
// Router.get(`/get-customer-list`,customerService.customerList)
// Router.post('/create-order',orderService.insertOrderDetails)
// Router.get('/get-order-list',orderService.orderList)
// Router.get("/get-all-order-details",orderService.getAllOrderDetails)

Router.get("/get-customer-details", findAllService.getAllDetails)
Router.post("/post-customer-details", findAllService.postAllDetails)
    // Router.post("/login",loginControler.loginDetails)


module.exports = Router