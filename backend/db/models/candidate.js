const { DataTypes } = require('sequelize');
const {sequelize} = require('../dbConnection');

const Candidate = sequelize.define('Candidate', {
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
  document: {
    type: DataTypes.STRING,
    allowNull: false
  },
  departament: {
    type: DataTypes.STRING,
    allowNull: false
  },
  positionAspire: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  salaryAspire: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
}, {
  // Other model options go here
});

module.exports = Candidate;
  

