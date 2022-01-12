const { sequelize } = require('./dbConnection');
const Candidate = require('./models/candidate');
const Competence = require('./models/competence');
const competenceList = require('./models/competenceList');
const Employee = require('./models/employee');
const Language = require('./models/language');
const Position = require('./models/position');
const Training = require('./models/training');
const TrainingList = require('./models/trainingList');
const WorkExpecienceList = require('./models/workExpecienceList');
const workExperience = require('./models/workExperience');

function syncDatabase() {
    Candidate.hasMany(workExperience)
    Candidate.hasMany(Training)
    Candidate.hasMany(Competence)
    Candidate.hasOne(Position)

    sequelize.sync({force:false})
    .then((res) => console.log("Sycncronized"))
    .catch(err => console.log(err))
}

module.exports = syncDatabase;
