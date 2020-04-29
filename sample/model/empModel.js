const dbModel=require('../utilities/connection');
const employeeModel={};


//get all employee details
employeeModel.getAllEmployees= () =>{
    return dbModel.getEmployeeCollection().then(model=>{
        return model.find().then(data=>{if(data){return data;}
    else{
        return null;
    }})
    })
}


module.exports=employeeModel;