
const Candidate = require('../db/models/candidate')



const getCandidate = async (req,res) => {
    try {
        let {id} = req.params
        let candidates = await Candidate.findOne({where:{id}});
        res.json({candidates})
    } catch (error) {
        console.log(error);
    }       
}

const getAllCandidates =  async (req,res) => {
    try {
        let candidates = await Candidate.findAll();
        res.json({candidates})
    } catch (error) {
        console.log(error);
    }
}

const addCandidate = async (req,res) => {
    try {
        let { company,salary,startDate,endDate,position } = req.body
        await Candidate.create({company,salary,startDate,endDate,position});
        res.json({status:'ok'})
    } catch (error) {
        console.log("error");
    }
}

const putCandidate = async (req,res) =>{
    try {
        let { company,salary,startDate,endDate,position,id } = req.body
        let candidates = await Candidate.findOne({where:{id}});
        await candidates.update({company,salary,startDate,endDate,position,id });
        res.json({status:'ok'})
    } catch (error) {
        console.log(error);
    }
}

const deleteCandidate = async (req,res) =>{
    try {
        let {id} = req.params
        let candidates = await Candidate.destroy({where:{id}});
        res.json({candidates})
    } catch (error) {
        console.log(error);
    }  
}


module.exports = {
getCandidate,
addCandidate,
getAllCandidates,
deleteCandidate,
putCandidate
};