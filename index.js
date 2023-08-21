// Write your solution in this file!

const employee = {

    name : "jimbo",
    streetAddress: "123 Fake St",

};

function updateEmployeeWithKeyAndValue(obj, key, value){

   const  newEmployee = { ...obj };
    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){

    obj[key] = value;

    return obj;

}

function deleteFromEmployeeByKey(obj, key){
   
    const  updatedEmployee = { ...obj };
    delete updatedEmployee[key] ;

    return updatedEmployee;

}


function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key] ;
    return obj;

}

