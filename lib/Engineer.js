// Code to define and export the Engineer class.  This class inherits from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub = () => this.github;
    getRole = () => 'Engineer'
}
module.exports = Engineer;