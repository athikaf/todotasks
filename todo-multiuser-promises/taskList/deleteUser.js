const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');

const readFile = util.promisify(fileSystem.readFile);
const writeFile = util.promisify(fileSystem.writeFile);

function deleteUser() {
    let email = readline.questionEMail(`Enter The email:`);
    readFile(path.resolve('listData', 'todo.json'))
        .then((data) => {
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
            return writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(taskData));
        })
        .then(() => {
            console.log("user Deleted Successfully");
        })
        .catch((err) => {
            console.error(err);
            deleteUser();
        })
}

module.exports = deleteUser;