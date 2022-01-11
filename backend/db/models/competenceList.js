const { DataTypes } = require('sequelize');
const {sequelize} = require('../dbConnection');

const competenceList = sequelize.define('competence-List', {
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

module.exports = competenceList;
  

