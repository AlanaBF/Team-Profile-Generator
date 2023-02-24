// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
       super(name, id , email);
       this.school = school;
    }

    getName() {

    }

    getId() {

    }

    getEmail() {

    }

    getSchool() {

    }

    getRole() {
        return Intern
    }
}

const intern = new Intern();
//intern.printInfo();

module.exports = Intern;