//write code and run tsc app.ts command initiates a process called transpilation performed by tsc executable, a compiler that is at the core of the TypeScript language. We need to compile TypeScript code into JavaScript because browsers do not currently support TypeScript out of the box.
//do this to target new version of js file to be generated: tsc app.ts --target es2022
//after adding above in config file, run tsc
const title = "Hello TypeScript!";
//defining vars with types
const firstname = "ambe";
const lastname = "nchang";
const age = 30; //number type to define a floating-point number and hexadecimal, decimal, binary, and octal literals.
const isActive = true;
//arrays - list of items that contains certain types only eg string as shown below
const people = ["abii", "miya"];
const peoples = ["abii", "miya"]; //second syntax
//we can add the any type in our code manually when it is hard to infer the data type from the information we have at any given point
let order;
function setOrderNo() {
    order = "0001";
}
const usergender = "female"; //created my own variable using my type and assigning one of the predefined values.
//functions
//optional type inputs since compiler can infer type
function getname(firstname, lastname) {
    return `${(this.firstname, this, lastname)}`;
}
//returning nothing, use void type
function getname2(firstname, lastname) {
    console.log `${(this.firstname, this, lastname)}`;
}
getname2(firstname, lastname);
