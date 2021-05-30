const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');

const readFile = util.promisify(fileSystem.readFile);


async function getAllTask() {
    try{
    const fileData = await readFile(path.resolve('listData', 'todo.json'))
        let data = JSON.parse(fileData);
        data.forEach((ele) => {
            console.log(ele.task);
    })
}
        catch (err) {
            throw err;
        }

        
}
module.exports = getAllTask;