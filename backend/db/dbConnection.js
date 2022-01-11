const { Sequelize } = require('sequelize');
var sqlite  = require('sqlite3').sqlite

const sequelize = new Sequelize('classroom','user','pass',{
  dialect: 'sqlite',
  storage: './db/RH.sqlite'
});
  
async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    return true
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return false
  }
}


module.exports = {
    connectToDatabase,
  sequelize
}