const { DataTypes } = require('sequelize');
const {sequelize} = require('../dbConnection');

const WorkExperienceList = sequelize.define('work-experience-List', {
  candidateId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  workExperienceId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = WorkExperienceList;
  

