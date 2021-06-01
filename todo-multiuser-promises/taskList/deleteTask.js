const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');

const readFile = util.promisify(fileSystem.readFile);
const writeFile = util.promisify(fileSystem.writeFile);

function deleteTask() {
    let email = readline.questionEMail(`Enter The email:`);
    readFile(path.resolve('listData', 'todo.json'))
        .then((data) => {
            let taskData = JSON.parse(data);
            let op = false;
            taskData.forEach((element) => {
                    if (email === element.email) {
                        op = true;
                        const id = readline.question(`Enter the ID to Delete the Task:  `);
                        let val = false;
                        let todo = element.todo;
                        todo.forEach((item,index) => {
                        if(item.id === id){
                        val = true;
                        todo.splice(index,1);
                        return writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(taskData))
                }
            });
            if(!op){
                throw new Error('Invalid ID');
            }
            
            }})
        })
        .then(() => {
            console.log("Task Is Deleted Successfully");
        })
        .catch((err) => {
            console.error(err);
            deleteTask();
        })
}
module.exports = deleteTask;
