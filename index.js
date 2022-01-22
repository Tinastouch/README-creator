// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require ('path');
const fs = require ('fs');
const generateMarkdown = require ('./utils/generateMarkdown');
// const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address'
},
{
    type: 'input',
    name: 'title',
    message: 'What is the name of your project? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('You need to enter a project name!');
        return false;
      }
    }
},
{
    type: 'checkbox',
    name: 'languages',
    message: 'What did you this project with? (Check all that apply)',
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
  },
{
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
},
{
    type: 'input',
        name: 'link',
        message: 'Enter the your deployed link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project deployed link!');
            return false;
          }
        }
},
{
    type: 'list',
    name: 'license',
    message: 'What kind of license should yor project have? (Required)',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
{
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm install'
},
{
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm run test',
},
{
    type: 'input',
    name: 'usage',
    message: 'Add information here that would be useful to the user pertaining to this repo' 
},
{   
    type: 'input',
    name: 'contributing',
    message: 'What contributions were made during the creation of this project?'
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
function init () {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log('Now Generating README...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });
}
init();
