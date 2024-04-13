// TO-DO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TO-DO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'list',
        name: 'badges',
        message: 'What kind of badges will your project have?',
        choices: ['Heart On Your Sleeve', 'Open Sourcerer', 'Starstruck', 'Quickdraw', 'Pair Extraordinaire', 'Pull Shark', 'Galaxy Brain', 'YOLO', 'Public Sponsor', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'support',
        message: 'Tell people where they can go for help. (ex. issue tracker, chat room, email address, etc.',
    },
    {
        type: 'input',
        name: 'roadmap',
        message: 'If you have ideas for releases in the future then list them here.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
    {
        type: 'input',
        name: 'authorsandacknowledgment',
        message: 'If you have anyone that has helped contribute to the project, show your appreciation to them here.',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
