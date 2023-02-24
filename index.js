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

//inquirer.prompt([{
//manager questions
//})

// Prompts the user for their answers and then calls for the file to be written to the README based on those responses
 //.then(response) => {
//     fs.writeFile('sampleREADME.md', `${generateMarkdown(data)}`,
//     (err) => (err ? console.error(err) : console.log('Successfully wrote to sampleREADME.md'))
//     )


//const buildPage = () => {
    //new html file to go in here
//}