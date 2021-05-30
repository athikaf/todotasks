const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');


const readFile = util.promisify(fileSystem.readFile);

async function getSpecificTask() {
    try{
    const id = readline.question(`Enter ID of specific task:  `);
        let op = false;
    const fileData = await readFile(path.resolve('listData', 'todo.json'))
                let data = JSON.parse(fileData);     
                data.forEach((ele) => {
                    if(id == ele.id) {
                        console.log(ele.task);
                        op = true;
                    }
                    
                })
                 if (!op) {
                 throw new Error('Invalid ID');
                    }
                 }
                catch (err) {
                console.log(err);
                getSpecificTask();
            }
        }

module.exports = getSpecificTask;