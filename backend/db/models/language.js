const { DataTypes } = require('sequelize');
const {sequelize} = require('../dbConnection');

const Language = sequelize.define('Language', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
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

module.exports = Language;
  

