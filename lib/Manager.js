// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
       super(name, id, email);
        this.officeNumber = officeNumber;

    }

    getName() {

    }

    getId() {

    }

    getEmail() {

    }

    getRole() {
        return Manager
    }
}

const manager = new Manager();
//manager.printInfo();

module.exports = Manager;