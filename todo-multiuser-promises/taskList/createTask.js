const fileSystem = require('fs');
const readline = require('readline-sync');
const path = require('path');
const util = require('util');
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fileSystem.readFile);
const writeFile = util.promisify(fileSystem.writeFile);

function createTask() {
    let email = readline.questionEMail(`Enter The email:`);
    
    readFile(path.resolve('listData', 'todo.json'))
        .then((fileData) => {
            let data = JSON.parse(fileData.toString());
            let op = false;
            data.forEach(element => {
                if (email == element.email) {
                    let task = readline.question(`Enter The Task:`);
                    let todo = element.todo;
                    let newTask = { id: uuidv4(), task: task };
                    todo.push(newTask);
                    op = true;
                    return writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(data));
                }
            });
            if (!op) {
                console.log("Email ID not found");
                createTask();
            }
        })
        .then(() => {
            console.log("Task Is Added Successfully");
        })
        .catch((err) => {
            console.error(err);
        })
}
module.exports = createTask;
