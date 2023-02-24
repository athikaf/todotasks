const fileSystem = require('fs');
const readline = require('readline-sync');
const path = require('path');
function getSpecificTask() {
    const id = readline.question(`Enter ID of specific task:  `);
    fileSystem.readFile(path.resolve('listData', 'todo.json'), (err, fileData) => {
        if (err) {
            throw err;
        } else {
            let data = JSON.parse(fileData);
            let op = false;
            data.forEach((ele) => {
                if (id == ele.id) {
                    console.log(ele.task.toString());
                    op = true;
                }
            });
            if (!op) {
                console.log("Invalid ID");
                getParticularTask();
            }
        }
    });
}
module.exports = getSpecificTask;