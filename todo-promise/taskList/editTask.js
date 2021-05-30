const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');


const readFile = util.promisify(fileSystem.readFile);
const writeFile = util.promisify(fileSystem.writeFile);

function editTask() {
    const id = readline.question(`Enter the ID to edit the Task:  `);
    readFile(path.resolve('listData', 'todo.json'))
        .then((fileData) => {
            let data = JSON.parse(fileData);
            let taskcontent = readline.question(`Enter the taskcontent:  `);
            let op = false;
            data.forEach(ele => {
                if (id === ele.id){
                    ele.task = taskcontent;
                    op = true;
                }
          
            return writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(data));
        })
    if (!op) {
        throw new Error('Invalid ID');
    }
})
        .then(() => {
            console.log("Task Is edited Successfully");
        })
        .catch((err) => {
            console.error(err);
        })
}
module.exports = editTask;