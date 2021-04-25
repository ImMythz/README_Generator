// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'The MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'The MIT License') {
    return 'https://opensource.org/licenses/MIT'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'The MIT License') {
    return
  }
}

// TODO: Create a function to generate markdown for README
// README format for answers to fill
// function generateREADME(data) {
//   return `
// # ${data.title}

// ## Table of Contents
//   [Description]
//   [Installation]
//   [Usage]
//   [License]
//   [Contributors]
//   [Tests]
//   [Questions]

// ## Description
// \n${data.description}\n

// ## Installation
// \n${data.installation}\n

// ## Usage
// \n${data.usage}\n

// ## License
// \n${data.license}\n

// ## Contributers
// \n${data.contributers}\n

// ## Tests
// \n${data.tests}\n

// ## Questions
// \nFor any questions regarding this application, please email me at ${data.questions}`;
// }
// TODO: Create a function to initialize app
// const init = () => {
//   questions()
//     .then((data) => writeFileAsync('README.md', generateREADME(data)))
//     .then(() => console.log('Your README has successfully been generated'))
//     .catch((err) => console.error(err));
// };


// module.exports = generateREADME;
// module.exports = init;
module.exports = renderLicenseBadge;
module.exports = renderLicenseLink;
module.exports = renderLicenseSection;