const customerDetails = require("../../models/index")
const inserCustomerDetails = async (data) => {
    try {
        let payload = {
            customerId:124,
            firstName: "chandan",
            lastName: "kumar",
            email: "kumar@gmail.com",
            contactNo: 3698617038,
            address: "DDN",
            userName: "kumar14",
            password: "kumar@123",
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
        let result = await customerDetails.sequelize.models.customerDetails.create(payload)
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        return error

    }
}

const getCustomerDetailsList = async () => {
    try {
        let result = await customerDetails.findAll()
        console.log(result)
        return result
    } catch (error) {
        return error
    }
}

module.exports = {
    inserCustomerDetails,
    getCustomerDetailsList
}