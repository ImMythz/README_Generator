// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// README format for answers to fill
function generateREADME(data) {
  return `# ${data.title}
  
  ## Project Title
  \n${answers.title}\n

  ## Table of Contents
  [Description]
  [Installation]
  [Usage]
  [License]
  [Contributors]
  [Tests]
  [Questions]

  ## Description
  \n${answers.description}\n
    
  ## Installation
  \n${answers.installation}\n
    
  ## Usage
  \n${answers.usage}\n
    
  ## License
  \n${answers.license}\n
    
  ## Contributers
  \n${answers.contributers}\n
    
  ## Tests
  \n${answers.tests}\n
    
  ## Questions
  \nFor any questions regarding this application, please email me at ${answers.questions}

`;
}


module.exports = generateREADME;