const Employee = require('../db/models/employee')

const Candidate = require('../db/models/candidate')



const getEmployee = async (req,res) => {
    try {
        let {id} = req.params
        let employee = await Employee.findOne({where:{id}});
        res.json({employee})
    } catch (error) {
        console.log(error);
    }       
}

const getAllEmployee =  async (req,res) => {
    try {
        let employee = await Employee.findAll();
        res.json({employee})
    } catch (error) {
        console.log(error);
    }
}

const addEmployee = async (req,res) => {
    try {
        let { name,document,departament,startDate,postion,monthlyIncome,state } = req.body
        await Employee.create({name,document,departament,startDate,postion,monthlyIncome,state});
        res.json({status:'ok'})
    } catch (error) {
        console.log("error");
    }
}
 // FOR OTHERS Employee CONTROLLERS COPY THEM FROM 
 // CANDIDATES CONTROLLERS  


module.exports = {
    getEmployee,
    getAllEmployee,
    addEmployee
};


