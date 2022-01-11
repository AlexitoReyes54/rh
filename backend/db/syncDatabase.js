const { sequelize } = require('./dbConnection');

function syncDatabase() {
    sequelize.sync({force:true})
    .then((res) => console.log("Sycncronized"))
    .catch(err => console.log(err))
}

module.exports = syncDatabase;
