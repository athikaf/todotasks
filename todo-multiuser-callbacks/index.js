//global imports
const readLine = require('readline-sync');


//local imports
const createTask = require('./taskList/createTask');
const getAllTask = require('./taskList/getAllTask');
const getSpecificTask = require('./taskList/getSpecificTask');
const editTask = require('./taskList/editTask');
const deleteTask = require('./taskList/deleteTask');
const createUser = require('./taskList/createUser');
const deleteUser = require('./taskList/deleteUser');

function main() {
    console.log(`
                        
     1 : Create A Todo Task in todo.json	              
     2 : Get All the existing tasks in todo.json          
     3 : Get a specific task id data                    
     4 : Edit a specific id todo task                   
     5 : Delete a specific id todo task                 
     6 : Create User
     7 : Delete User
     8 : exit                                            
                               
    `);
    let menu = readLine.questionInt("Select the Option from the List Displayed Above:  ");
    switch (menu) {
        case 1:
            createTask();
            break;
        case 2:
            getAllTask();
            break;
        case 3:
            getSpecificTask();
            break;
        case 4:
            editTask();
            break;
        case 5:
            deleteTask();
            break;
        case 6:
            createUser();
            break;
        case 7:
            deleteUser();
            break;
        case 8:
            console.log(`Thank You!`);
            break;
        default:
            console.log('Invalid Response Try Again');
            main();
    }
}
main();