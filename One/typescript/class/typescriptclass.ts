class User {
  //class properties. private meaning user class will not have direct access to these properties
  // private firstName: string = '';
  // private lastName: string = '';
  // private isActive: boolean = true;

  // //constructor
  // constructor(firstname: string, lastname: string, isActive: boolean = true) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.isActive = isActive;
  // }

  //making the constructor create properties automatically with no previous declaration
  constructor(
    private firstName: string,
    private lastName: string,
    private isActive: boolean = true
  ) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getActive(): boolean {
    return this.isActive;
  }
}

//customer class extending the user class above
class Customer extends User {
  taxNumber: number;
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

//creating an object that can be of both user and customer types
const account: User | Customer = undefined;

//using instanceof keyword to access diff properties of account object according to underlying class
if (account instanceof Customer) {
  const taxNo = account.taxNumber;
} else {
  const name = account.getFullName;
}

//An interface is a code contract that defines a particular schema. Any artifacts like classes and functions implementing an interface should comply with this schema.
//interface to manage products.
interface Product {
  name: string; //properties
  price: number;
  description?: string; //If we do not want to implement an interface member, we can define it as optional using the ? character:
  getCategories: () => string[]; //method
}

//a class can use an interface by adding the implements keyword and interface name
class Dress implements Product {
  name: string = "Dress";
  price: number = 500;
  getCategories(): string[] {
    return ["Modernity", "CoverUp"];
  }
}

//We can also use interfaces to change the type of a variable from one type to another, called type casting.
//In the following code, we instruct TypeScript to treat the product object as a Product type:
const product = {
  name: "dress",
  price: 20,
} as Product;

//see more on generics and utility types

//decorators
