const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');

const readFile = util.promisify(fileSystem.readFile);


async function getAllTask() {
    try{
    let email = readline.questionEMail(`Enter The email:`);
    let fileData = await readFile(path.resolve('listData', 'todo.json'))
        let data = JSON.parse(fileData);
        let op = false;
        data.forEach((element) => {
            if (email === element.email) {
                let todo = element.todo;
                todo.forEach(element => {
                    console.log(element.task);
                    op = true;
                })
            }
        })
        if (!op) {
            console.log("Email not found");
        }
    }
        
        catch (err) {
            console.log(err);
            getAllTask();
        }
        
}
module.exports = getAllTask;