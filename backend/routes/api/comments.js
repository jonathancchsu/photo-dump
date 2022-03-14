const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Comment } = require('../../db/models');

const router = express.Router();

const validateCommentPost = [
    check('comments')
        .exists({checkFalsy: true})
        .withMessage('Please provide a comment.'),
    handleValidationErrors
]

router.get('/:photo_id', asyncHandler(async (req, res) => {
    const photo_id = parseInt(req.params.photo_id, 10)
    const comments = await Comment.findAll({
        where: {
            photo_id: photo_id
        }
    })
    res.json(comments)
}))


router.post('/', asyncHandler(async (req, res) => {
    const comment = await Comment.create(req.body)
    return res.json(comment);
}))

router.put('/:photo_id/:comment_id',
validateCommentPost,
asyncHandler(async (req, res) => {
    const comment_id = parseInt(req.params.comment_id)
    const { comments } = req.body
    const newComment = await Comment.findByPk(comment_id)
    if (newComment) {
        await newComment.update({
            comments: comments
        })
    }
    const updatedCom = await Comment.findByPk(comment_id)
    return res.json(updatedCom);
}))

router.delete('/:photo_id/:comment_id',
asyncHandler(async (req, res) => {
    const comment_id = parseInt(req.params.comment_id, 10)

    const comment = await Comment.findByPk(comment_id);
    if (comment) {
        await comment.destroy()
        return res.json(comment.id)
    }
}))


module.exports = router;
