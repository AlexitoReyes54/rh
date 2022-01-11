const { DataTypes } = require('sequelize');
const {sequelize} = require('../dbConnection');

const TrainingList = sequelize.define('Training-List', {
  candidateId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  trainingId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = TrainingList;
  

