const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');


const readFile = util.promisify(fileSystem.readFile);
const writeFile = util.promisify(fileSystem.writeFile);

async function editTask() {
    try{
    const id = readline.question(`Enter the ID to edit the Task:  `);
    let taskcontent = readline.question(`Enter the taskcontent:  `);
    let op = false;
    const data = await readFile(path.resolve('listData', 'todo.json'))
            let userData = JSON.parse(data);
            userData.forEach(ele => {
                if (id === ele.id){
                    ele.task = taskcontent;
                    op = true;
                }
        })
    if (!op) {
        throw new Error('Invalid ID');
    }
        await writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(userData));
        console.log("Task Is edited Successfully");
    }
        catch(err){
            console.error(err);
            editTask();
        }
}
module.exports = editTask;