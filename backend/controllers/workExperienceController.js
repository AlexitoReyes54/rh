
const WorkExperience = require('../db/models/workExperience')



const getWorkExperience = async (req,res) => {
    try {
        let {id} = req.params
        let workExperiences = await WorkExperience.findOne({where:{id}});
        res.json({workExperiences})
    } catch (error) {
        console.log(error);
    }       
}

const getAllWorkExperiences =  async (req,res) => {
    try {
        let workExperiences = await WorkExperience.findAll();
        res.json({workExperiences})
    } catch (error) {
        console.log(error);
    }
}

const addWorkExperience = async (req,res) => {
    try {
        let { company,salary,startDate,endDate,position } = req.body
        await WorkExperience.create({company,salary,startDate,endDate,position});
        res.json({status:'ok'})
    } catch (error) {
        console.log("error");
    }
}

const putWorkExperience = async (req,res) =>{
    try {
        let { company,salary,startDate,endDate,position,id } = req.body
        let workExperiences = await WorkExperience.findOne({where:{id}});
        await workExperiences.update({company,salary,startDate,endDate,position,id });
        res.json({status:'ok'})
    } catch (error) {
        console.log(error);
    }
}

const deleteWorkExperience = async (req,res) =>{
    try {
        let {id} = req.params
        let workExperiences = await WorkExperience.destroy({where:{id}});
        res.json({workExperiences})
    } catch (error) {
        console.log(error);
    }  
}


module.exports = {
getWorkExperience,
addWorkExperience,
getAllWorkExperiences,
deleteWorkExperience,
putWorkExperience
};