// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string

function renderLicenseBadge(license) {
  if (license.license === 'The MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else {
    return '';
  }
}

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license.license === 'The MIT License') {
    return 'https://opensource.org/licenses/MIT'
  } else {
    return '';
  }
}

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license.license === 'The MIT License') {
    return `Copyright (c) ${new Date().getFullYear()}, ${license.name}
\nPermission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
  } else {
    return '';
  }
}

// Function that formats answers in README
function generateREADME(data) {
  return `
# ${data.title}${renderLicenseBadge(data)}

## Table of Contents
  [Description](#description)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Contributors](#contributors)\n
  [Tests](#tests)\n
  [Questions](#questions)\n

## Description
\n${data.description}\n

## Installation
\n${data.installation}\n

## Usage
\n${data.usage}\n

## License
\n${data.license}${renderLicenseBadge(data)}\n
\n${renderLicenseSection(data)}\n
\n${renderLicenseLink(data)}\n


## Contributers
\n${data.contributers}\n

## Tests
\n${data.test}\n

## Questions
\nFor any questions regarding this application, please email me at ${data.questions}
\nor visit my GitHub at ${data.github}`;
}

// Export so we can call in index.js
module.exports = generateREADME;