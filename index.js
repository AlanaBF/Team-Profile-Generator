const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//somewhere in the code I will need to call this:
//render(myArrayOfTeamMembers)

//Manager Prompt
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
        //generateManager();
        promptForNextEmployee()
    })

const promptForNextEmployee = () => {
    inquirer.prompt([
        // choice of 3
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'memberAdd',
            choices: ['Manager', 'Engineer', 'Intern', 'I dont want to add any more Team members'],
        },
    ])
        .then(response => {
            if (Engineer) {
                promptForEngineer()
            } else if (Intern) {
                promptForIntern();
            } else
                generateTeam() //    use the functionality from page-template to generate the team
        })
    }

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
                message: 'What is your Engineers github username?',
                name: 'github',
            },
        ]).then(response => {
            // add new engineer to employees array
            promptForNextEmployee();
        })
    }

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
            // add new intern to employees array
            promptForNextEmployee();
        })
    }

    const buildPage = (response) => {
         render(team)
    
// Calls for the file to be written to the html based on those responses
//  .then((response) => {
//         fs.writeFile('team.html'),
//             (err) => (err ? console.error(err) : console.log('Successfully wrote to team.html'))
//     })
}
