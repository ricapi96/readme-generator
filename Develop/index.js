// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'Apache', 'Eclipse', 'Mozilla', 'GNU'],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
]);
};


// TODO: Create a function to write README file
const generateReadme = (answers) =>

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then.
}

// Function call to initialize app
init();
