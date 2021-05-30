const fileSystem = require('fs');
// const readline = require('readline-sync');
const path = require('path');
function getAllTask() {
    fileSystem.readFile(path.resolve('listData', 'todo.json'), (err, fileData) => {
        if (err) {
            console.log(err);
        } else {
            let data = JSON.parse(fileData);
            data.forEach((ele) => {
                console.log(ele.task.toString());
            });
        }
    });
}
module.exports = getAllTask;