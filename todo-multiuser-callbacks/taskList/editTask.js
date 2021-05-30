const fileSystem = require('fs');
const readline = require('readline-sync');
const path = require('path');
function editTask() {
    let email = readline.questionEMail(`Enter The email:`);
    let id = readline.question('Enter The ID To Edit That Task: ');
    let taskContent = readline.question('Enter The New Task: ');
    fileSystem.readFile(path.resolve('listData', 'todo.json'), (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            let taskData = JSON.parse(data);
            let op = false;
            taskData.forEach((element) => {
                if (email === element.email) {
                    let todo = element.todo;
                    todo.forEach(element => {
                        if (id === element.id) {
                            element.task = taskContent;
                            op = true;
                        }
                    });
                }
            });
            // console.log(taskData)
            fileSystem.writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(taskData), (err) => {
                if (err) {
                    console.error(err);
                }
                else {
                    console.log("Task Is Updated Successfully");
                }
            });
        }
    })
}
module.exports = editTask;