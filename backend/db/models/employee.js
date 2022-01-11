const { DataTypes } = require('sequelize');
const {sequelize} = require('../dbConnection');

const Employee = sequelize.define('Employee', {
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
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  postion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  monthlyIncome: {
    type: DataTypes.NUMBER,
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

module.exports = Employee;
  

