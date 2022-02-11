
const Position = require('../db/models/position')



const getPosition = async (req,res) => {
    try {
        let {id} = req.params
        let positions = await Position.findOne({where:{id}});
        res.json({positions})
    } catch (error) {
        console.log(error);
    }       
}

const getAllPositions =  async (req,res) => {
    try {
        let positions = await Position.findAll();
        res.json({positions})
    } catch (error) {
        console.log(error);
    }
}

const addPosition = async (req,res) => {
    try {
        let { maximunSalary,riskLevel,minimumSalary,name } = req.body;
        await Position.create({maximunSalary,minimumSalary,riskLevel,name});
        res.json({status:'ok'})
    } catch (error) {
        console.log(error);
    }
}

const putPosition = async (req,res) =>{
    try {
        let { maximunSalary,id,riskLevel,minimumSalary,name,state } = req.body;
        let positions = await Position.findOne({where:{id}});
        await positions.update({maximunSalary,minimumSalary,riskLevel,name,state});
        res.json({status:'ok'})
    } catch (error) {
        console.log(error);
    }
}

const deletePosition = async (req,res) =>{
    try {
        let {id} = req.params
        let positions = await Position.destroy({where:{id}});
        res.json({positions})
    } catch (error) {
        console.log(error);
    }  
}


module.exports = {
getPosition,
addPosition,
getAllPositions,
deletePosition,
putPosition
};