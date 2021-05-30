const fileSystem = require('fs');
const readline = require('readline-sync');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function createTask() {
    let email = readline.questionEMail(`Enter The email:`);
    let op = false;
    fileSystem.readFile(path.resolve('listData','todo.json'),(err , data) => {
        if(err){
            console.log(err);
        }
        else {
            let taskData = JSON.parse(data);
            taskData.forEach(element => {
                if(email == element.email){
                    let task = readline.question(`Enter The Task:`);
                    let todo = element.todo;
                    let newTask = { id: uuidv4(), task: task };
                    todo.push(newTask);
                    op = true;
                }
            });
                fileSystem.writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(taskData), (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("Task created successfully");
                    }
                })
            }
            
        if (!op) {
            console.log("Email ID not found");
            createTask();
        }
            
        })
        

    }
module.exports = createTask;