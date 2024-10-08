class User {
    firstName;
    lastName;
    isActive;
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
    constructor(firstName, lastName, isActive = true) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isActive = isActive;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getActive() {
        return this.isActive;
    }
}
//customer class extending the user class above
class Customer extends User {
    taxNumber;
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
}
//creating an object that can be of both user and customer types
const account = undefined;
//using instanceof keyword to access diff properties of account object according to underlying class
if (account instanceof Customer) {
    const taxNo = account.taxNumber;
}
else {
    const name = account.getFullName;
}
