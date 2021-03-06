const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const { Photo, User } = require('../../db/models');

const router = express.Router();

const photoValidation = [
    check('title')
        .exists({ checkFalsy: true})
        .isLength({min: 1})
        .withMessage('Please provide a title for your photo.'),
    check('photo_url')
        .exists({ checkFalsy: true })
        .isURL()
        .withMessage('Please provide a valid url.'),
    check('caption')
        .exists({ checkFalsy: true})
        .isLength({min: 1})
        .withMessage('Give a caption for your photo.'),
]

router.get('/', asyncHandler(async (req, res) => {
    const photos = await Photo.findAll({
        order: [['updatedAt', 'DESC']],
        include: [{model: User}],

    });
    res.json(photos);
}))

router.post('/', photoValidation, asyncHandler(async (req, res, next) => {
    const { user_id, title, photo_url, caption } = req.body;
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()){
        const photo = await Photo.create({
            user_id,
            title,
            photo_url,
            caption
        });
        res.json(photo);
    }
    else res.json(validatorErrors);
}))

router.patch('/:id', asyncHandler(async (req, res) => {
    const choicePhoto = await Photo.findByPk(req.params.id)
    const { title, description } = req.body

    if (choicePhoto) {
        await choicePhoto.update({
            title,
            description
        })
    }
    const updatedPhoto = await Photo.findByPk(req.params.id)
    return res.json(updatedPhoto)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const photo = await Photo.findByPk(req.params.id);
    if (photo) {
        await photo.destroy();
    }
    return res.json(photo);
}))

module.exports = router;
