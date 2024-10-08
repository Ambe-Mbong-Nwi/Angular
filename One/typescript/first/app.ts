//write code and run tsc app.ts command initiates a process called transpilation performed by tsc executable, a compiler that is at the core of the TypeScript language. We need to compile TypeScript code into JavaScript because browsers do not currently support TypeScript out of the box.
//do this to target new version of js file to be generated: tsc app.ts --target es2022
//after adding above in config file, run tsc

const title = "Hello TypeScript!";

//defining vars with types
const firstname: string = "ambe";
const lastname: string = "nchang";
const age: number = 30; //number type to define a floating-point number and hexadecimal, decimal, binary, and octal literals.
const isActive: boolean = true;

//arrays - list of items that contains certain types only eg string as shown below
const people: string[] = ["abii", "miya"];
const peoples: Array<string> = ["abii", "miya"]; //second syntax

//we can add the any type in our code manually when it is hard to infer the data type from the information we have at any given point
let order: any;
function setOrderNo() {
  order = "0001";
}

//custom types can also be created
type Gender = "female" | "male"; //type can accept only one of the two values
const usergender: Gender = "female"; //created my own variable using my type and assigning one of the predefined values.

//functions
//optional type inputs since compiler can infer type
function getname(firstname: string, lastname: string): string {
  return `${(this.firstname, this, lastname)}`;
}

//returning nothing, use void type
function getname2(firstname: string, lastname: string): void {
  console.log`${(this.firstname, this, lastname)}`;
}

//adding optional parameters using ternary operator
function addToCart(productID: number, quantity?: number) {
  const product = {
    id: productID,
    qty: quantity ?? 1, //quantity not passed, use default coalescing operator
  };
}
