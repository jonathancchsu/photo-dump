'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PhotosInAlbums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      album_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Albums'}
      },
      photos_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Photos' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PhotosInAlbums');
  }
};
