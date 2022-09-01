'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('orderDetails',{
      fields: ['customerId'],
      type: 'foreign key',
      name: 'customer_order_association',
      references: {
        table: 'customerDetails',
        field: 'customerId',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('orderDetails',{
      fields: ['customerId'],
      type: 'foreign key',
      name: 'customer_order_association',
      references: {
        table: 'customerDetails',
        field: 'customerId',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
  }
};
