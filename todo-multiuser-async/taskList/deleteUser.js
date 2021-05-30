const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');

const readFile = util.promisify(fileSystem.readFile);
const writeFile = util.promisify(fileSystem.writeFile);

async function deleteUser() {
    try{
    let email = readline.questionEMail(`Enter The email:`);
    let data = await readFile(path.resolve('listData', 'todo.json'))
            let taskData = JSON.parse(data);
            let op = false;
            taskData.forEach((item, index) => {
                if (item.email === email){
                    taskData.splice(index,1);
                    op = true;
                }
            });
            if (!op) {
                throw new Error('Invalid ID');
            } 
           await writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(taskData));
        console.log("user Deleted Successfully");
        }

        
    
        catch(err){
            console.error(err);
            deleteUser();
        }
}

module.exports = deleteUser;