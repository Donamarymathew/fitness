const empdb=require('../model/empModel');
let employeeSerive={}


//get details of all employees
employeeSerive.getAllEmployees=()=>{
    return empdb.getAllEmployees().then(data=>{
        if(data==null){
            let err=new Error("There are no registered employee yet!");
            err.status=404;
            throw err;
        }
        else{
            return data;
        }
    })
}

module.exports=employeeSerive;