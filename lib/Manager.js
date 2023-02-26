// Code to define and export the Manager class. This class inherits from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber = () => this.officeNumber
    getRole = () => 'Manager'
}

module.exports = Manager;