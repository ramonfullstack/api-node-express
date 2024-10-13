const { FAILSAFE_SCHEMA } = require('js-yaml');
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite', 
    storage: 'database.sqlite',
    logging: false
})

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: false
})

module.exports = Task;