const fileSystem = require('fs');
const readline = require('readline-sync');
const util = require('util')
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fileSystem.readFile);
const writeFile = util.promisify(fileSystem.writeFile);

function createTask() {
    let task = readline.question(`Enter The Task:`);
    readFile(path.resolve('listData', 'todo.json'))
        .then((fileData) => {
            let data = JSON.parse(fileData.toString());
            let newTask = { id: uuidv4(), task: task };
            data.push(newTask);
            return writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(data));
        })
        .then(() => {
            console.log("Task Is Added Successfully");
        })
        .catch((err) => {
            console.error(err);
        })
}
module.exports = createTask;