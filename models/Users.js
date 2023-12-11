const Sequelize = require('sequelize');
const sequelize = require("./db");

const User = sequelize.define("clientes", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
});
User.sync({alter: true});
module.exports = User;

