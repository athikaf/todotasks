const fileSystem = require('fs');
const util = require('util');
const readline = require('readline-sync');
const path = require('path');


const readFile = util.promisify(fileSystem.readFile);

function getSpecificTask() {
    let email = readline.questionEMail(`Enter The email:`);
        readFile(path.resolve('listData', 'todo.json'))
            .then((fileData) => {
                let data = JSON.parse(fileData);
                let op = false;
                data.forEach(ele => {
                    if (email === ele.email) {
                        op = true;
                        const id = readline.question(`Enter ID of specific task:  `);
                        let val = false;
                        let todo = ele.todo;
                        todo.forEach(ele => {
                            if (id == ele.id) {
                                let task = ele.task;
                                console.log(task);
                                val = true;
                            }
                        });
                        if (!val) {
                            throw new Error('Invalid ID');
                        }
                    }
                })

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