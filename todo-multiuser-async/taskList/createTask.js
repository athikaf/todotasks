const fileSystem = require('fs');
const readline = require('readline-sync');
const path = require('path');
const util = require('util');
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fileSystem.readFile);
const writeFile = util.promisify(fileSystem.writeFile);

async function createTask() {
    try{
    let email = readline.questionEMail(`Enter The email:`);
    let fileData = await readFile(path.resolve('listData', 'todo.json'))
            let data = JSON.parse(fileData.toString());
            let op = false;
            data.forEach(element => {
                if (email == element.email) {
                    let task = readline.question(`Enter The Task:`);
                    let todo = element.todo;
                    let newTask = { id: uuidv4(), task: task };
                    todo.push(newTask);
                    op = true;
                }
            });
        if (!op) {
            console.log("Email ID not found");
            
        }
        await writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(data));
        console.log("Task Is Added Successfully");
    }
        catch(err){
            console.error(err);
        }
}
module.exports = createTask;
