/*Lab 5 :
--------
TODO CLI App
* Create todo.json [] (default empty array)
    - Each todo item is an object
    - todo.json is group of todo item object
CLI Menu Options :
    1 : Create A Todo Task in todo.json
        (Input : Task Item) Note : ids should be generated automatically
    2 : Get All the existing tasks in todo.json (Only Print tasks)
    3 : Get a particular task id data (Input : task id)Implement error for invalid id input
    4 : Edit a Particular id todo task (Input : task id, updated task data)
    5 : Delete a Particular id todo task
    0 : exit
*/

//default imports
const readLine = require('readline-sync');


//local imports
const createTask = require('./taskList/createTask');
const getAllTask = require('./taskList/getAllTask');
const getSpecificTask = require('./taskList/getSpecificTask');
const editTask = require('./taskList/editTask');
const deleteTask = require('./taskList/deleteTask');

function main() {
    console.log(`
                        
     1 : Create A Todo Task in todo.json	              
     2 : Get All the existing tasks in todo.json          
     3 : Get a specific task id data                    
     4 : Edit a specific id todo task                   
     5 : Delete a specific id todo task                 
     6 : exit                                             
                               
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
            console.log(`Thank You!`);
            break;
        default:
            console.log('Invalid Response Try Again');
            main();
    }
}
main();