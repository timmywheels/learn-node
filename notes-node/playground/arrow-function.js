//regular es6 arrow function
// let square = (x) => {
//     let result = x * x;
//     return result;
// }


// let square = (x) => x * x; //shorthand arrow function that works on one line

// let square = x => x * x; //if only one arg, works without parentheses

// console.log(square(9));

//arrow functions DO NOT bind the 'this' keyword
//arrow functions DO NOT bind 'arguments' array

var user = {
    name: 'Timothy',
    sayHi: () => {
        console.log(arguments) //arrow function won't work here
        console.log(`Hi. I'm ${this.name}.`); //using 'this' does not work
    },
    sayHiAlt (){
        console.log(arguments)
        console.log(`Hi. I'm ${this.name}.`); //this will run as expected
    }
};

// user.sayHi();
user.sayHiAlt();

// user.sayHi(1,2,3); //doesn't work
// user.sayHiAlt(1,2,3); //works