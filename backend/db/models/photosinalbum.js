'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhotosInAlbum = sequelize.define('PhotosInAlbum', {
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    photos_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  PhotosInAlbum.associate = function(models) {
    // associations can be defined here
  };
  return PhotosInAlbum;
};
