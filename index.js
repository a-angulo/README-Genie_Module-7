// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";

const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
    validate: (input) => input.trim() !== '' || 'Please enter a title',
  },
  {
    type: "input",
    message: "What is your name?",
    name: "name",
    validate: (input) => input.trim() !== '' || 'Please enter your name...',
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of the project:",
    validate: (input) => input.trim() !== '' || 'Please enter a description',
  },
  {
    type: 'input',
    message: "What was your motivation for creating this application?",
    name: 'motivation',
    validate: (input) => input.trim() !== '' || 'Please enter your motivation',
  },
  {
    type: "list",
    message: "Select a license type",
    name: "license",
    choices: ["Apache License 2.0", "MIT License", "GPL 3.0", "BSD 3-Clause", "none"],
  },
  {
    type: 'input',
    message: "Please list any additional contributors",
    name: "contribution",
    validate: (input) => input.trim() !== '' || 'Please enter a contributor or N/A',
  },
  {
    type: 'input',
    message: "Please provide the packages that must be installed",
    name: 'installation',
    validate: (input) => input.trim() !== '' || 'Please enter the application requirements',
  },
  {
    type: 'input',
    message: "Please include testing instructions",
    name: 'tests',
    validate: (input) => input.trim() !== '' || 'Please enter testing instructions or N/A',
  },
  {
    type: 'input',
    message: "What is your GitHub username?",
    name: 'username',
    validate: (input) => input.trim() !== '' || 'Please enter your username',
  },
  {
    type: 'input',
    message: 'Enter your e-mail',
    name: 'email',
    validate: (input) => input.trim() !== '' || 'Please enter your email',
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README file has been created successfully!');
    }
  });
}

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

init();//help from tutor and Xpert learning to fix the code and checkmark issue
