
var docClient=require('../utilities/DynamoDBClient');
let employeeModel={}
let obj={}


var paramsgetall = {
    TableName: "employees",
    ProjectionExpression: "id,firstName, lastName"
    };
console.log("Scanning employee table.");

employeeModel.getAllEmployees=()=>{  docClient.scan(paramsgetall, onScan);

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
         return null;
    } else {
        console.log("Scan succeeded.");
        console.log(data.Items);
         return data.Items;
    }}
}



////////////////////////////////////////////////////////////////////////////////////////////////////


employeeModel.getEmployeeById=function(empId){ 
    var paramsgetbyId = {
        TableName: "employees",
        Key:{
            id:empId
         },
        ProjectionExpression: "id,firstName, lastName"
        };
    console.log("Getting employee based on ID");
    
    return docClient.get(paramsgetbyId, function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
             return null;
        } else {
            console.log("Successfully retrieved data.");
           
            //    console.log(data.Items.firstName );
            
            console.log(data.Item);
             return data.Item;
        }});

}

/////////////////////////////////////////////////////////////////////////////////////////////////
    
    employeeModel.registerEmployee=function(employee){
        console.log("inside model");
        console.log(employee);
        var paramsput = {
            TableName: "employees",
            Item: {
                "id":  employee.id,
                "firstName": employee.firstName,
                "lastName": employee.lastName
                 }
            };
         
         return docClient.put(paramsput,function(err, data) {
                if (err) {
                    console.error("Unable to add employee", employee.id, ". Error JSON:", JSON.stringify(err, null, 2));
                    return null;
                } else {
                    console.log("PutItem succeeded:", employee.id);
                    return employee.id;
                }
             });
            }
    
   //////////////////////////////////////////////////////////////////////////////////////////////////
   
   

            employeeModel.deleteEmployee=function(empId){
            var paramsdelete = {
                TableName:"employees",
                Key:{
                   id:empId
                },
               
            };
            
            console.log("Attempting a conditional delete...");
           docClient.delete(paramsdelete, function(err, data) {
                if (err) {
                    console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
                }
            });
        }
/////////////////////////////////////////////////////////////////////////////////////////////////////

// var params = {
//     TableName:table,
//     Key:{
//         "year": year,
//         "title": title
//     },
//     UpdateExpression: "remove info.actors[0]",
//     ConditionExpression: "size(info.actors) > :num",
//     ExpressionAttributeValues:{
//         ":num": 3
//     },
//     ReturnValues:"UPDATED_NEW"
// };

// console.log("Attempting a conditional update...");
// docClient.update(params, function(err, data) {
//     if (err) {
//         console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
//     }
// });


module.exports=employeeModel;