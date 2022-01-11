const { DataTypes } = require('sequelize');
const {sequelize} = require('../dbConnection');

const workExperience = sequelize.define('work-experience', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salary: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue:true
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = workExperience;
  

