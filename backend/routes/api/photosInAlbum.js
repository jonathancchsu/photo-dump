const express = require('express');
const asyncHandler = require('express-async-handler');

const { PhotosInAlbum } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
  const { photos_id, album_id } = req.body;

  const data = await PhotosInAlbum.findAll({
    where: {
        photos_id,
        album_id
    }
  })

  if (data.length < 0) {
      const relation = await PhotosInAlbum.create({
          photos_id,
          album_id
      })
      res.json(relation);
  } else {
      res.json({ 'nothing' : 'nothing' });
  }
  
}))

module.exports = router;
