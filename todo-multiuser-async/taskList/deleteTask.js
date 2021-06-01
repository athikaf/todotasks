const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');

const readFile = util.promisify(fileSystem.readFile);
const writeFile = util.promisify(fileSystem.writeFile);

async function deleteTask() {
    try{
        let email = readline.question(`Enter the email: `);
        let data = await readFile(path.resolve('listData', 'todo.json'))
        let taskData = JSON.parse(data);
            let op = false;
        taskData.forEach((ele) => {
            if (email === ele.email){
                op = true;
                let id = readline.question(`Enter the id to delete that task: `);
                let todo = ele.todo;
                let newlist = todo.filter(item => item.id === id);
                if (newlist.length === 0){
                    throw new Error("Invalid ID");
                } else {
                    let index = todo.findIndex(function (data){
                        return data.id === id;
                    });
                    todo.splice(index, 1);
                }
            }
        });
        if (!op) {
            throw new Error('Invalid ID');
        }
        await writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(taskData));
        console.log("Task Is Deleted Successfully");
    }

        catch(err) {
            console.error(err);
            deleteTask();
        }
}
module.exports = deleteTask;