'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    caption: {
      type: DataTypes.TEXT,
      allowNull: false,
      default: ''
    },
    photo_url: {
      allowNull: false,
      type: DataTypes.STRING(1000),
      validate: {
        len: [10, 1000]
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    }
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.User, {foreignKey: 'user_id'});
    Photo.hasMany(models.Comment, {foreignKey: 'photo_id', onDelete:'cascade', hooks: true})
  };
  return Photo;
};
