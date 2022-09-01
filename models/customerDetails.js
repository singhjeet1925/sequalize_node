
'use strict';
const  {Model} = require('sequelize');

module.exports = (sequelize,DataTypes) => {
  class customerDetails extends Model {
    
    
    static associate(models) {
      customerDetails.hasMany(models.orderDetails)
      models.orderDetails.belongsTo(customerDetails)
    };
  }


  customerDetails.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.INTEGER,
    address: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customerDetails', 
  });
  return customerDetails;
};

