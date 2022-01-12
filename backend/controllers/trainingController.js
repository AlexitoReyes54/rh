
const Training = require('../db/models/training')



const getTraining = async (req,res) => {
    try {
        let {id} = req.params
        let trainings = await Training.findOne({where:{id}});
        res.json({trainings})
    } catch (error) {
        console.log(error);
    }       
}

const getAllTrainings =  async (req,res) => {
    try {
        let trainings = await Training.findAll();
        res.json({trainings})
    } catch (error) {
        console.log(error);
    }
}

const addTraining = async (req,res) => {
    try {
        let { description,
            level, 
            startDate,
            endDate,
            institucion } = req.body
        await Training.create({description,level,startDate,endDate,institucion});
        res.json({status:'ok'})
    } catch (error) {
        console.log("error");
    }
}

const putTraining = async (req,res) =>{
    try {
        let { description,
            level,
            startDate,
            endDate,
            institucion,
            id } = req.body
        let trainings = await Training.findOne({where:{id}});
        await trainings.update({description,level,startDate,endDate,institucion});
        res.json({status:'ok'})
    } catch (error) {
        console.log(error);
    }
}

const deleteTraining = async (req,res) =>{
    try {
        let {id} = req.params
        let trainings = await Training.destroy({where:{id}});
        res.json({trainings})
    } catch (error) {
        console.log(error);
    }  
}


module.exports = {
getTraining,
addTraining,
getAllTrainings,
deleteTraining,
putTraining
};