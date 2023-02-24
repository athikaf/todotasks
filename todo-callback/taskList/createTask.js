const fileSystem = require('fs');
const readline = require('readline-sync');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function createTask() {
    let task = readline.question(`Enter The Task:`);
    fileSystem.readFile(path.resolve('listData','todo.json'),(err , data) => {
        if(err){
            console.log(err);
        }
        else { 
            let taskData = JSON.parse(data);
            let newTask = { id: uuidv4(), task: task };
            taskData.push(newTask);
            fileSystem.writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(taskData), (err) => {
                if(err){
                    console.log(err);
                }
                else{
                    console.log("Task created successfully");
                }
            })
            
        }
    })
}
module.exports = createTask;