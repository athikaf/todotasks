const fileSystem = require('fs');
const readline = require('readline-sync');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function createUser() {
    let email = readline.questionEMail(`Enter The email:`);
    fileSystem.readFile(path.resolve('listData', 'todo.json'), (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            let userData = JSON.parse(data);
            let checkUser = userData.filter(item => item.email == email);
            if(checkUser.length !== 0){
                console.log("Email already exists");
            } else {
                let newUser = { id: uuidv4(), email: email, todo: [] };
                userData.push(newUser);
                fileSystem.writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(userData), (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("User added successfully");
                    }
                })
            }
            

        }
    })
}
module.exports = createUser;