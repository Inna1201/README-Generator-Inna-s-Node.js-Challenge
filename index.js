// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions =
    [
        {
            type: 'input',
            message: 'Please enter the title of your project.',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please write a brief description of your project.',
            name: 'description',
        },
        {
            type: 'list',
            message: 'Please choose the type of license for your project.',
            name: 'license',
            choices: [
                "APACHE 2.0",
                "GNU General Public License 3.0",
                "MIT",
                "BSD 3",
                "None"
            ]
        },
        {
            type: 'input',
            message: 'Please provide the command to install dependencies.',
            name: 'install',
            default: 'npm i'
        },
        {
            type: 'input',
            message: 'Please provide information on how the repository can be used.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please provide information about contributing to the repository.',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Please provide the command to run tests.',
            name: 'tests',
            default: 'npm test'
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username.',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Please enter your email address.',
            name: 'email',
        },

    ];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync(path.join(__dirname, 'README.md'), generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (answers) {
        writeToFile(answers)
    })
}

// Function call to initialize app
init();

