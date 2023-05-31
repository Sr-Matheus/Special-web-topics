const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tasks', 'root', '#12345', 
{ 
    host: 'localhost',
    dialect: 'mysql'
});

try 
{
    sequelize.authenticate();
    console.log('Database connected with Sucess!')
} 

catch (error) 
{
    console.log('Database not connected');
}

module.exports = sequelize;