
const Language = require('../db/models/language')



const getLanguage = async (req,res) => {
    try {
        let {id} = req.params
        let languages = await Language.findOne({where:{id}});
        res.json({languages})
    } catch (error) {
        console.log(error);
    }       
}

const getAllLanguages =  async (req,res) => {
    try {
        let languages = await Language.findAll();
        res.json({languages})
    } catch (error) {
        console.log(error);
    }
}

const addLanguage = async (req,res) => {
    try {
        let { name } = req.body
        await Language.create({name});
        res.json({status:'ok'})
    } catch (error) {
        console.log(error);
    }
}

const putLanguage = async (req,res) =>{
    try {
        let { name,id } = req.body;
        let languages = await Language.findOne({where:{id}});
        await languages.update({name});
        res.json({status:'ok'})
    } catch (error) {
        console.log(error);
    }
}

const deleteLanguage = async (req,res) =>{
    try {
        let {id} = req.params
        let languages = await Language.destroy({where:{id}});
        res.json({languages})
    } catch (error) {
        console.log(error);
    }  
}


module.exports = {
getLanguage,
addLanguage,
getAllLanguages,
deleteLanguage,
putLanguage
};