const db = require("../../models")
const customerDetails = db.customerDetails;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); 
// const orderDetails = db.orderDetails;


const login = async (data) => {
    const {email,password}=data

    try {
       await customerDetails.findOne({
        where: {
            email: email
          }
       })
       .then (user => {
        if (!user) {
            console.log("User Not found.");
          }
          var passwordIsValid = bcrypt.compareSync(
            password,
            user.password
          );

          if (!passwordIsValid) {
           console.log("Invalid Password!");
          }else{
            console.log("Login successfully");
          }
          var token = jwt.sign({ id: user.id }, "mysecret", {
            expiresIn: 86400 // 24 hours
          });

         const data = {
            id: user.id,
            email: user.email,
            token: token
          };

          console.log(data);
       })

    } catch (err) {
        // throw new (err)  
        console.log(err)
    }
}

module.exports = {
    login
}