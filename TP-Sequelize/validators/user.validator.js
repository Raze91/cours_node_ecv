const Joi = require('joi');
const { postDefinition } = require('./post.validator')

exports.createUserSchema = Joi.object({
    lastname: Joi.string().min(3).required(),
    firstname: Joi.string().required(),
    email: Joi.string().required(),
    username: Joi.string().required(),
    github: Joi.string().required(),
});

exports.editUserSchema = Joi.object({
    id: Joi.string().required(),
    lastname: Joi.string().min(3),
    firstname: Joi.string().min(3),
    email: Joi.string(),
    username: Joi.string(),
    github: Joi.string(),
});

const userDefinition = Joi.object({
    id: Joi.string().required(),
    lastname: Joi.string().required(),
    firstname: Joi.string().required(),
    email: Joi.string().required(),
    username: Joi.string().required(),
    github: Joi.string().required(),
    createdAt: Joi.required(),
    updatedAt: Joi.required(),
}).unknown(true);


exports.getUserSchema = Joi.object({
    user: userDefinition,
    posts: Joi.array().items(postDefinition)
}).unknown(true);

exports.getAllUsersSchema = Joi.array().items(userDefinition).required();
