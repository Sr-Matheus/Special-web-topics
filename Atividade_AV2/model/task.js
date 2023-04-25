const { DataTypes } = require ('sequelize');

const db = require('../db/conn');

const Task = db.define('Task',
{
    tarefa:{ type: DataTypes.STRING, required: true },
    status:{ type: DataTypes.STRING, required: true },
});

module.exports = Task;