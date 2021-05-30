const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');


const readFile = util.promisify(fileSystem.readFile);

function getSpecificTask() {
    const id = readline.question(`Enter ID of specific task:  `);
        readFile(path.resolve('listData', 'todo.json'))
            .then((fileData) => {
                let data = JSON.parse(fileData);
                let op = false;
                data.forEach((ele) => {
                    if(id == ele.id) {
                        console.log(ele.task.toString());
                        op = true;
                    }
                    
                });
                 if (!op) {
                 throw new Error('Invalid ID');
                    }
                 })
                .catch ((err) => {
                console.log(err);
                getSpecificTask();
            })
        }

module.exports = getSpecificTask;