const fileSystem = require('fs');
const readline = require('readline-sync');
const path = require('path');
const util = require('util');
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fileSystem.readFile);
const writeFile = util.promisify(fileSystem.writeFile);


function createUser() {
    let email = readline.questionEMail(`Enter The email:`);
    readFile(path.resolve('listData', 'todo.json'))
        .then((fileData) => {
            let userData = JSON.parse(fileData.toString());
            let checkUser = userData.filter(item => item.email == email);
            if (checkUser.length !== 0) {
                console.log("Email already exists");
            } else {
                let newUser = { id: uuidv4(), email: email, todo: [] };
                userData.push(newUser);
                return writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(data));
            }
        })
        .then(() => {
            console.log("user Is Added Successfully");
        })
        .catch((err) => {
            console.error(err);
            createUser();
        })
    }
module.exports = createUser;