'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Albums', [
    {
      name: 'Film',
      user_id: 1
    },
    {
      name: 'Streets',
      user_id: 1
    },
    {
      name: 'Sports',
      user_id: 2
    },
    {
      name: 'I love Nature',
      user_id: 2
    },
    {
      name: 'Weekend things',
      user_id: 3
    },
    {
      name: 'ae1',
      user_id: 3
    },
    {
      name: 'collection',
      user_id: 3
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Albums', null, {});
  }
};
