const Joi = require('joi');

exports.createCommentSchema = Joi.object({
    content: Joi.string().min(10).required(),
    date: Joi.required(),
    userId: Joi.string().required(),
    postId: Joi.string().required(),
});

exports.editCommentSchema = Joi.object({
    content: Joi.string().min(10),
});

exports.commentDefinition = Joi.object({
    id: Joi.string().required(),
    content: Joi.string().required(),
    date: Joi.required(),
    userId: Joi.string().required(),
    postId: Joi.string().required(),
    createdAt: Joi.required(),
    updatedAt: Joi.required()
}).unknown(true);

exports.getCommentSchema = this.commentDefinition;

exports.getAllCommentsSchema = Joi.array().items(this.commentDefinition).required();