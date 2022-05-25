// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown.js");
// const outputPath = path.join(OUTPUT_DIR, "README.md");




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
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'Eclipse', 'Mozilla', 'GNU', 'none'],
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
        type: 'list',
        name: 'badge',
        message: 'What kind of badge would you like on this project?',
        choices: ['Made for VSCode', 'Made with Bash', 'Open Source', 'Badges Awesome', 'none'],
    },
    {
        type: 'list',
        name: 'installation',
        message: 'What command is needed to run this file?',
        choices: ['npm inquirer', 'none'],
    },
  ];


// TODO: Create a function to write README file
function writeToFile (fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data); 
    
}

// TODO: Create a function to initialize app
function init () {
    inquirer.prompt(questions)
    .then((data) => {
        console.log("Creating README...")
        writeToFile("README.md", generateMarkdown(data));
    })
    .catch((err) => console.log(err));

}


// Function call to initialize app
init();
