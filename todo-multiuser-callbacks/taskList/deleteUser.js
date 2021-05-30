const fileSystem = require('fs');
const readline = require('readline-sync');
const path = require('path');

function deleteUser() {
    let email = readline.questionEMail(`Enter The email:`);
    fileSystem.readFile(path.resolve('listData', 'todo.json'), (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            let userData = JSON.parse(data);
            let checkUser = userData.filter(item => item.email == email);
            if (checkUser.length == 0) {
                console.log("Email does not exist");
            } else {
                let deleteEmail = userData.filter(item => item.email !== email);
                userData = deleteEmail;
                fileSystem.writeFile(path.resolve('listData', 'todo.json'), JSON.stringify(userData), (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("User deleted successfully");
                    }
                })
            }


        }
    })
}
module.exports = deleteUser;