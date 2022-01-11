const { DataTypes } = require('sequelize');
const {sequelize} = require('../dbConnection');

const Position = sequelize.define('Position', {
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
  riskLevel: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue:true
  },
  minimumSalary: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  maximunSalary: {
    type: DataTypes.NUMBER,
    allowNull: false,
  }
}, {
  // Other model options go here
});

module.exports = Position;
  

