// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');


// TODO: Create a function to write README file
const writeFileAsync = util.promisify(fs.writeFile);



// TODO: Create an array of questions for user input


const questions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    }, {
        type: 'input',
        name: 'description',
        message: 'Enter the description for your project',
    }, {
        type: 'input',
        name: 'tableOfContents',
        message: 'Enter a table of contents here for your README',
    }, {
        type: 'input',
        name: 'installation',
        message: 'Write the installation instructions for your project',
    }, {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?',
    }, {
        type: 'list',
        name: 'license',
        choices: ["The MIT License", "No License"],
        message: 'Choose a license type',
    }, {
        type: 'input',
        name: 'contributers',
        message: 'List any contributers you had on this project',
    }, {
        type: 'input',
        name: 'test',
        message: 'Enter a description on how to test your application',
    }, {
        type: 'input',
        name: 'questions',
        message: 'enter the email address you would like developers to reach you at',
    }])
};

// README format for answers to fill
const generateREADME = (answers) => {
    `# Project Title
    \n${answers.title}\n
    ## Description
    \n${answers.description}\n
    ## Table of Contents
    \n${answers.tableOfContents}\n
    ## Installation 
    \n${answers.installation}\n
    ## Usage
    \n${answers.usage}\n
    ## License
    \n${answers.license}\n
    ## Contributers
    \n${answers.contributers}
    ## Tests
    \n${answers.tests}\n
    ## Questions
    \nFor any questions regarding this application, please email me at ${answers.questions}`;
}
// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
        .then(() => console.log('Your README has successfully been generated'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();