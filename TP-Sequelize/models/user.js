'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Comment);
      User.hasMany(models.Post);
      User.hasOne(models.Role, {
        foreignKey: {
          name: 'id',
        },
      });
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    github: DataTypes.STRING,
    roleId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};