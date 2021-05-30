const fileSystem = require('fs');
const readline = require('readline-sync');
const path = require('path');
const { get } = require('http');
function getAllTask() {
    let email = readline.questionEMail(`Enter The email:`);
    fileSystem.readFile(path.resolve('listData', 'todo.json'), (err, fileData) => {
        if (err) {
            console.log(err);
        } else {
            let data = JSON.parse(fileData);
            let op = false;
            data.forEach((element) => {
                if (email === element.email){
                    let todo = element.todo;
                    todo.forEach(element => {
                        console.log(element.task);
                        op = true;
                    })
                }
            })
            if (!op){
                console.log("Email not found");
                getAllTask();
            }
        }
    })
}
module.exports = getAllTask;