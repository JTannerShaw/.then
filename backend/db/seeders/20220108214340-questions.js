'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Questions', [
     {
     ownerId: 1,
     title: 'This is a test title',
     description: 'This is a test question!!!!!',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     ownerId: 2,
     title: 'This is a second test title',
     description: 'This is a second test question!!!!!',
     createdAt: new Date(),
     updatedAt: new Date()
   },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Questions', null, {});
  }
};
