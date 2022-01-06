'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Demo-user',
        email: 'demo@demouser.com',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        username: 'Fake-user',
        email: 'FakeUser@demouser.io',
        hashedPassword: bcrypt.hashSync('fakepassword'),
      },
      {
        username: 'NotFake',
        email: 'NotFake@test.com',
        hashedPassword: bcrypt.hashSync('notapassword')
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
   return queryInterface.bulkDelete('Users', {
    username: { [Op.in]: ['Demo-user', 'Fake-user', 'NotFake']}
   }, {});
  }
};
