'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhotosInAlbum = sequelize.define('PhotosInAlbum', {
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Albums' }
    },
    photos_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Photos' }
    }
  }, {});
  PhotosInAlbum.associate = function(models) {
    // associations can be defined here
    PhotosInAlbum.belongsTo(models.Photo, { foreignKey: 'photo_id' })
    PhotosInAlbum.belongsTo(models.Album, { foreignKey: 'album_id' })
  };
  return PhotosInAlbum;
};
