'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productdetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productdetails.init({
    productName: DataTypes.STRING,
    orderNo: DataTypes.INTEGER,
    sellerName: DataTypes.STRING,
    sellerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productdetails',
  });
  return productdetails;
};