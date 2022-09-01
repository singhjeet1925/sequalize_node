const Order = require("../../models/order")

const insertOrderDetails = async (data) => {
    try {
        let paylaod = {
            orderNo: data.orderNo,
            customerId: data.customerId,
            productId: data.productId,
            sellerId: data.sellerId,
        }
        const result = await Order.create(paylaod)
        return result
    } catch (error) {
       throw new (err)
       
    }
}

const orderList = async () => {
    try {
        let result = Order.findAll()
        return result
    } catch (err) {
        throw new (err)
    }
}

const  getAllOrderDetails = async() => {
    try {
        let orderDetails = await Order.sequelize.query(`SELECT customers.firstName, customers.lastName, customers.email, customers.CustomerId,  orders.CustomerId, orders.orderId
        FROM orders
        INNER JOIN customers
        ON customers.CustomerId = orders.customerId;`)
        return orderDetails
    } catch (err) {
        throw new (err)
    }
}

module.exports = {
    insertOrderDetails,
    orderList,
    getAllOrderDetails
}