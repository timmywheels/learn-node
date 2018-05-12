// var obj = {
// 	name: 'Timothy',
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


// var personString = '{"name": "Timothy", "age": 27}';

// var person = JSON.parse(personString);

// console.log(typeof person);

// console.log(person);

const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'Some body'
};


//convert originalNote object into a string
var originalNoteString = JSON.stringify(originalNote);

//save originalNoteString value into a notes.json file
fs.writeFileSync('notes.json', originalNoteString);

//read value
var noteString = fs.readFileSync('notes.json');

//turn noteString into an object
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
