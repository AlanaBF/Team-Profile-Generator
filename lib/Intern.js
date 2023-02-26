// Code to define and export the Intern class. This class inherits from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool = () => this.school
    getRole = () => 'Intern'
}

module.exports = Intern;