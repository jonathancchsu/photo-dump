const express = require('express');
const asyncHandler = require('express-async-handler');

const { check, validationResult } = require('express-validator');
const { Album, User, Photo, PhotosInAlbum } = require('../../db/models');

const router = express.Router();

router.get('/users/:id(\\d+)', asyncHandler(async (req, res) => {
  const user = req.params.id;
  const response = await Album.findAll({
    where: {
      user_id: +user,
    },
    include: [{ model: User }, { mdoel: PhotosInAlbum,
      include: Photo
    }]
  });
  res.json(response);
}))

router.post('/', asyncHandler(async (req, res) => {
  const { name, user_id } = req.body;
  const album = await Album.create({
    name,
    user_id
  })

  res.json(album);
}))

router.patch('/:id', asyncHandler(async (req, res) => {
  const album = await Album.findByPk(req.params.id);
  const { name } = req.body;

  if (album) {
    await album.update({
      name
    });
  }
  const updatedAlbum = await Album.findByPk(req.params.id);
  return res.json(updatedAlbum);
}))

router.delete('/:id', asyncHandler(async (req, res) => {
  const album = await Album.findByPk(req.params.id);
  if (album) {
      await album.destroy();
  }
  return res.json(album);
}))

module.exports = router;
