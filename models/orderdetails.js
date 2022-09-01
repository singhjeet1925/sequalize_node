'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderDetails.hasMany(models.productdetails)
      models.productdetails.belongsTo(orderDetails)
    }
  }
  orderDetails.init({ 
    orderNo: DataTypes.INTEGER,
    sellerName: DataTypes.STRING,
    sellerId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orderDetails',
  });
  return orderDetails;
};