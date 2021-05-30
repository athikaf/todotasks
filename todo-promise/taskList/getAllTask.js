const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');

const readFile = util.promisify(fileSystem.readFile);


function getAllTask() {
    readFile(path.resolve('listData', 'todo.json'))
    .then((fileData) => {
        let data = JSON.parse(fileData);
        data.forEach((ele) => {
            console.log(ele.task.toString());
    })
})
        .catch ((err) => {
            throw err;
        }) 
        
}
module.exports = getAllTask;