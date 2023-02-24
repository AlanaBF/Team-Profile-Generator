// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getName() {

    }

    getId() {

    }

    getEmail() {

    }

    getGithub() {

    }

    getRole() {
        return Engineer
    }
}

const Engineer = new Engineer();
//engineer.printInfo();

module.exports = Engineer;