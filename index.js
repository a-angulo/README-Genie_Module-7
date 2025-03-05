// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
        validate: (input) => {
            if (input.trim() === '') {
                return 'Please enter a title';
            }
            return true;
        }
    },
    {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: (input) => {
            if (input.trim() === '') {
                return 'Please enter your name...';
            }
            return true;
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of the project:",
        validate: (input) => {
            if (input.trim() === '') {
                return 'Please enter a description';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What was your motivation for creating this application?",
        name: 'motivation',
        validate: (input) => {
            if (input.trim() === '') {
                return 'Please enter your motivation';
            }
            return true;
        }
    },
    {
        type: "checkbox",
        message: "Select a license type",
        name: "license",
        choices: ["APACHE License 2.0", "MIT License", "GPL 3.0", "BSD 3-Clause", "none"],
    },
    {
        type: 'input',
        message: "Please list any additional contributors",
        name: "contributors",
        validate: (input) => {
            if (input.trim() === '') {
                return 'Please enter a contributor or N/A';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please provide the packages that must be installed",
        name: 'requirements',
        validate: (input) => {
            if (input.trim() === '') {
                return 'Please enter the application requirements';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please include testing instructions",
        name: 'tests',
        validate: (input) => {
            if (input.trim() === '') {
                return 'Please enter testing instructions or N/A';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        validate: (input) => {
            if (input.trim() === '') {
                return 'Please enter your username';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter your e-mail',
        name: 'email',
        validate: (input) => {
            if (input.trim() === '') {
                return 'Please enter your email';
            }
            return true;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log('README file has been creatd');
        }
    });
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error('Error during initialization:', error);
        });
}

// Function call to initialize app
init();

// Used Xpert Learning to assist with code 