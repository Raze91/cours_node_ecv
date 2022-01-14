const Joi = require('joi');

const { commentDefinition } = require("./comment.validator")

exports.createPostSchema = Joi.object({
    title: Joi.string().min(3).required(),
    content: Joi.string().required(),
    date: Joi.string().required(),
    userId: Joi.string().required(),
});

exports.editPostSchema = Joi.object({
    title: Joi.string().min(3),
    content: Joi.string(),
    date: Joi.string(),
    userId: Joi.string(),
});

exports.postDefinition = Joi.object({
    id: Joi.string().required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
    date: Joi.required(),
    userId: Joi.string().required(),
    createdAt: Joi.required(),
    updatedAt: Joi.required()
}).unknown(true);

exports.getPostSchema = Joi.object({
    post: this.postDefinition,
    comments: Joi.array().items(commentDefinition)
}).unknown(true);

exports.getAllPostsSchema = Joi.array().items(this.postDefinition).required();