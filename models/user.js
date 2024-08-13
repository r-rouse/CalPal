'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Example: User.hasMany(models.Meal);
    }

    // Instance method to check the password
    async checkPassword(password) {
      return await bcrypt.compare(password, this.password_hash);
    }
  }

  User.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,  // Specify this as the primary key
        autoIncrement: true // Add this if the user_id is auto-incremented
      },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'user',
    hooks: {
      beforeCreate: async (user, options) => {
        user.password_hash = await bcrypt.hash(user.password_hash, 10);
      },
      beforeUpdate: async (user, options) => {
        if (user.changed('password_hash')) {
          user.password_hash = await bcrypt.hash(user.password_hash, 10);
        }
      }
    }
  });

  return User;
};
