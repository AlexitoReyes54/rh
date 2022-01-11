const { DataTypes } = require('sequelize');
const {sequelize} = require('../dbConnection');

const Training = sequelize.define('Training', {
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
  },
  level: {
    type: DataTypes.STRING, // Grado | Post-grado | Maestría Doctorado | Técnico | Gestión
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  institucion: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
  
}, {
  // Other model options go here
});

module.exports = Training;
  

