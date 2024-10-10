const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite', 
    storage: 'database.sqlite'
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