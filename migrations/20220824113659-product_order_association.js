'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addConstraint('productdetails', {
    fields: ['orderId'],
    type: 'foreign key',
    name: 'order_product_association', // optional
    references: {
      table: 'orderdetails',
      field: 'orderId',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('productdetails', {
      fields: ['orderId'],
      type: 'foreign key',
      name: 'order_product_association', // optional
      references: {
        table: 'orderdetails',
        field: 'orderId',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  }
};
