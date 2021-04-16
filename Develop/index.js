// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");




// TODO: Create an array of questions for user input
const questions = [
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
        choices: ['MIT', 'Apache 2.0', 'Eclipse', 'Mozilla', 'GNU'],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Were there any contributors that assisted this project?',
    },
    {
        type: 'input',
        name: 'badge',
        message: 'What kind of badge would you like on this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how the user would intall program, if necessary:',
    },
  ];


// TODO: Create a function to write README file
function writeToReadme (fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Creating README...")
    );
}

// TODO: Create a function to initialize app
function init () {
    inquirer.prompt(questions)
    .then((data) => {
        writeToReadme("README.md", generateMarkdown(data));
    })
    .catch((err) => console.log(err));

}


// Function call to initialize app
init();
