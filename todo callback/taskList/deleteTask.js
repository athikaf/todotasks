const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');

function deleteTask() {
    const id = readline.question(`Enter the ID to Delete the Task:  `);
    fileSystem.readFile(path.resolve('listData', 'todo.json'), (err, data) => {
        if (err) {
            console.error(err);
        } else {
            let taskData = JSON.parse(data);
            let result = taskData.filter(item => item.id !== id);
            fileSystem.writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(result), (err) => {
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
module.exports = deleteTask;