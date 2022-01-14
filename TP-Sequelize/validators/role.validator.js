const Joi = require('joi');

exports.createRoleSchema = Joi.object({
    name: Joi.string().min(3).required(),
});

exports.editRoleSchema = Joi.object({
    name: Joi.string().min(3).required()
});

const roleDefinition = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    createdAt: Joi.required(),
    updatedAt: Joi.required(),
}).unknown(true);


exports.getRoleSchema = roleDefinition;

exports.getAllRolesSchema = Joi.array().items(roleDefinition).required();
