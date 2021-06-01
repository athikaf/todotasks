const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');


const readFile = util.promisify(fileSystem.readFile);
const writeFile = util.promisify(fileSystem.writeFile);

function editTask() {
    let email = readline.questionEMail(`Enter The email:`);
    readFile(path.resolve('listData', 'todo.json'))
        .then((data) => {
            let taskData = JSON.parse(data);
            let op = false;
            taskData.forEach((element) => {
                if (email === element.email) {
                    op = true;
                    let id = readline.question('Enter The ID To Edit That Task: ');
                    let taskcontent = readline.question(`Enter the taskcontent:  `);
                    let val = false;
                    let todo = element.todo;
                    todo.forEach(element => {
                        if (id === element.id) {
                            val = true;
                            element.task = taskcontent;
                            return writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(taskData));
                        }
                    });

    if (!val) {
        throw new Error('Invalid ID');
    }
}
});
            if (!op) {
                throw new Error('Invalid email ID');
            }
})
        .then(() => {
            console.log("Task Is edited Successfully");
        })
        .catch((err) => {
            console.error(err);
            editTask();
        })
}
module.exports = editTask;