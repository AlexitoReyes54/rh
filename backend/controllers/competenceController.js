
const Competence = require('../db/models/competence')



    const getCompetence = async (req,res) => {
        try {
            let {id} = req.params
            let competences = await Competence.findOne({where:{id}});
            res.json({competences})
        } catch (error) {
            console.log(error);
        }       
    }

    const getAllCompentences =  async (req,res) => {
        try {
            let competences = await Competence.findAll();
            res.json({competences})
        } catch (error) {
            console.log(error);
        }
    }

    const addCompetence = async (req,res) => {
        try {
            let { description } = req.body
            await Competence.create({description});
            res.json({status:'ok'})
        } catch (error) {
            console.log(error);
        }
    }

    const putCompentence = async (req,res) =>{
        try {
            let { description,id } = req.body;
            let competences = await Competence.findOne({where:{id}});
            await competences.update({description});
            res.json({status:'ok'})
        } catch (error) {
            console.log(error);
        }
    }

    const deleteCompentence = async (req,res) =>{
        try {
            let {id} = req.params
            let competences = await Competence.destroy({where:{id}});
            res.json({competences})
        } catch (error) {
            console.log(error);
        }  
    }


module.exports = {
    getCompetence,
    addCompetence,
    getAllCompentences,
    deleteCompentence,
    putCompentence
};