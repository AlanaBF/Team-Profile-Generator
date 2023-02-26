const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
//Variable to render the page template js file
const render = require("./src/page-template.js");


// Code to gather information about the development team members, and render the HTML file.
// empty array to collect information about the team members
const teamMembers = []

//Manager Prompt, always the first questions
inquirer.prompt([
    {
        //manager questions
        type: 'input',
        message: 'What is your Team Manager Name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your Team Manager Id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your Team Manager email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your Team Manager Office Number?',
        name: 'officeNum',
    },
])
    .then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNum)
        teamMembers.push(manager);
        promptForNextEmployee()
    })
// Promp for the next employee; engineer, intern or write to file if no more needed
const promptForNextEmployee = () => {
    inquirer.prompt([
        // choice of 3
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'memberAdd',
            choices: ['Add Engineer', 'Add Intern', 'Finish Building the Team'],
        },
    ])
        .then(response => {
            if (response.memberAdd === 'Add Engineer') {
                promptForEngineer();
            } else if (response.memberAdd === 'Add Intern') {
                promptForIntern();
            } else {
                fs.writeFile(outputPath, render(teamMembers), (err) => err ? console.error(err) : console.log('Successfully wrote to team.html'));
            }
        })
}
// Engineer prompt
const promptForEngineer = () => {
    inquirer.prompt([
        //engineer questions
        {
            type: 'input',
            message: 'What is your Engineers Name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your Engineers Id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your Engineers email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your Engineers Github username?',
            name: 'github',
        },
    ]).then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        teamMembers.push(engineer);
        promptForNextEmployee();
    })
}
// Intern propmt
const promptForIntern = () => {
    inquirer.prompt([
        //intern questions
        {
            type: 'input',
            message: 'What is your Interns Name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your Interns Id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your Interns email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your Interns school?',
            name: 'school',
        },
    ]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        teamMembers.push(intern);
        promptForNextEmployee();
    })
}