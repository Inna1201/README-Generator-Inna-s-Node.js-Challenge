// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'APACHE 2.0'){
    return '[![License](https://img.shields.io/badge/License-APACHE%202.0-yellowgreen)](https://opensource.org/licenses/Apache-2.0)'
  }  else if (license === 'GNU General Public License 3.0') {
    return '[![License](https://img.shields.io/badge/License-GPL%203.0-yellowgreen)](https://opensource.org/licenses/GPL-3.0)'
  } else if (license === 'MIT') {
    return '[![License](https://img.shields.io/badge/License-MIT-yellowgreen)](https://opensource.org/licenses/MIT)'
  } else if (license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD%203-yellowgreen)](https://opensource.org/licenses/BSD-3-Clause)'
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `### License
This project is licensed under the ${license} license.`;
  } else {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table Content 
- [Description](#description)
- [Instalation](#instalation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Description 
${data.description}


## Instalation
To install necessary dependencies, run the following command:
${data.install}


## Usage
${data.usage}


${renderLicenseSection(data.license)} 


## Contributing
${data.contributing}


## Tests
To run tests, run the following command:
${data.tests}


## Questions
If you have a questions please contact me via email: ${data.email}, or visit my gitHub page: https://github.com/${data.username}.
`;
}

module.exports = generateMarkdown;

