const { DataTypes } = require('sequelize');
const {sequelize} = require('../dbConnection');

const Competence = sequelize.define('Competence', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue:true
  }
}, {
  // Other model options go here
});

module.exports = Competence;
  

