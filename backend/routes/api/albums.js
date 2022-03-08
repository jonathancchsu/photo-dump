const express = require('express');
const asyncHandler = require('express-async-handler');

const { check, validationResult } = require('express-validator');
const { Album, Photo } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const albums = await Album.findAll();
    res.json(albums);
}))

router.post('/', asyncHandler(async (req, res) => {
    const { name, userId } = req.body;
    const album = await Album.create({
        name,
        userId
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
