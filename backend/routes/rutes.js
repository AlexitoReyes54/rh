var express = require('express')
var router = express.Router()
var {getCompetence,
    addCompetence,
    getAllCompentences,
    deleteCompentence,
    putCompentence} = require('../controllers/competenceController')
var {
    getLanguage,
    addLanguage,
    getAllLanguages,
    deleteLanguage,
    putLanguage
    } = require('../controllers/languageController')


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


router.get('/',(req,res) =>{
    console.log(req.body);
    res.send('oksss')
})

module.exports = router;