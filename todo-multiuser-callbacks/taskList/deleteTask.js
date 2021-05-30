const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');

function deleteTask() {
    let email = readline.questionEMail(`Enter The email:`);
    fileSystem.readFile(path.resolve('listData', 'todo.json'), (err, data) => {
        if (err) {
            console.error(err);
        } else {
            let taskData = JSON.parse(data);
            let op = false;
            taskData.forEach(element => {
                if (email === element.email){
                    const id = readline.question(`Enter the ID to Delete the Task:  `);
                    let todo = element.todo;
                    op = true;
                    let checkItem = todo.filter(item => item.id === id);
                    if (checkItem.length === 0){
                        console.log("Invalid task ID");
                        deleteTask();
                    } else {
                        let updatedList;
                        fileSystem.readFile(path.resolve('listData', 'todo.json'), (err, data) => {
                            if (err){
                                console.log(err);
                            } else {
                                let storedData = JSON.parse(data);
                                let newResult = todo.filter(item => item.id !== id);
                                updatedList = updateTodoList(storedData, email, newResult);
                                fileSystem.writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(updatedList), (err) => {
                                    if (err) {
                                        console.error(err);
                                    }
                                    else {
                                        console.log("Task Is Deleted Successfully");
                                    }
                                })
                            }
                        })
                    }
                    if(!op){
                        console.log("Email not found");
                        deleteTask();
                    }
                
                }
            });
        }
    })
}
function updateTodoList(data, email, newList){
    data.forEach(element => {
        if(email === element.email){
            element.todo = newList;
        }
    })
    return data;
}

module.exports = deleteTask;