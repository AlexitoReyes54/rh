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

router.get('/',(req,res) =>{
    console.log(req.body);
    res.send('oksss')
})

module.exports = router;