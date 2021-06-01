const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');

const readFile = util.promisify(fileSystem.readFile);
const writeFile = util.promisify(fileSystem.writeFile);

function deleteTask() {
    const id = readline.question(`Enter the ID to Delete the Task:  `);
    readFile(path.resolve('listData', 'todo.json'))
        .then((fileData) => {
            let taskData = JSON.parse(fileData);
            let op = false;
            taskData.forEach((item, index) => {
                if(item.id === id){
                    taskData.splice(index,1);
                    op = true;
                }
            });
            if(!op){
                throw new Error('Invalid ID');
            }
            return writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(taskData))
            
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