var express = require('express')
var router = express.Router()

var {
    getCompetence,
    addCompetence,
    getAllCompentences,
    deleteCompentence,
    putCompentence
    } = require('../controllers/competenceController')
var {
    getLanguage,
    addLanguage,
    getAllLanguages,
    deleteLanguage,
    putLanguage
    } = require('../controllers/languageController')
var {
    getTraining,
    addTraining,
    getAllTrainings,
    deleteTraining,
    putTraining
    } = require('../controllers/trainingController')
var {
    getPosition,
    addPosition,
    getAllPositions,
    deletePosition,
    putPosition
    } = require('../controllers/positionController')
var {
    getWorkExperience,
    addWorkExperience,
    getAllWorkExperiences,
    deleteWorkExperience,
    putWorkExperience
    } = require('../controllers/workExperienceController')
var {
    getCandidate,
    addCandidate,
    getAllCandidates,
    deleteCandidate,
    putCandidate
    } = require('../controllers/candidateController')
var {
    getEmployee,
    getAllEmployee,
    addEmployee
} = require('../controllers/employeeController')
const {createReport} = require('../helpers/excel')

    router.use(function(req, res, next){
        console.log('pass');
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Methods', '*');
          res.header('Access-Control-Allow-Headers', '*');
          next();
        });

        
//competence 
router.get('/competence',getAllCompentences);
router.get('/competence/:id',getCompetence);
router.post('/competence',addCompetence)
router.put('/competence',putCompentence)
router.delete('/competence/:id',deleteCompentence)

//languange 
router.get('/languange',getAllLanguages);
router.get('/languange/:id',getLanguage);
router.post('/languange',addLanguage)
router.put('/languange',putLanguage)
router.delete('/languange/:id',deleteLanguage)

//training 
router.get('/training',getAllTrainings);
router.get('/training/:id',getTraining);
router.post('/training',addTraining)
router.put('/training',putTraining)
router.delete('/training/:id',deleteTraining)

//position 
router.get('/position',getAllPositions);
router.get('/position/:id',getPosition);
router.post('/position',addPosition)
router.put('/position',putPosition)
router.delete('/position/:id',deletePosition)

//work expereience 
router.get('/work',getAllWorkExperiences);
router.get('/work/:id',getWorkExperience);
router.post('/work',addWorkExperience)
router.put('/work',putWorkExperience)
router.delete('/work/:id',deleteWorkExperience)

//candidate
router.get('/candidate',getAllCandidates);
router.get('/candidate/:id',getCandidate);
router.post('/candidate',addCandidate)
router.put('/candidate',putCandidate)
router.delete('/candidate/:id',deleteCandidate)

//employee
router.get('/employee',getAllEmployee);
router.get('/employee/:id',getEmployee);
router.post('/employee',addEmployee)

//game area
router.get('/',(req,res) =>{
    console.log(req.body);
    res.send('oksss')
})

router.get('/report',async (req,res) =>{
    await createReport()
    res.download("./Excel.xlsx");
}) 

module.exports = router;