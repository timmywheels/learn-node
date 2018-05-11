console.log('Starting app.js...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Tim', 91,'Tim', 91, 92, 93, 94]);

console.log(filteredArray);






// console.log(_.isString(true));
// console.log(_.isString('Tim'));



// var res = notes.addNote();
// console.log(res);

// console.log('Result:', notes.add(9, -2));


// var user = os.userInfo();
//
// console.log(user.username);
//
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.` , function(err){
//     if(err){
//         console.log('Unable to write to file!');
//     }
// });

