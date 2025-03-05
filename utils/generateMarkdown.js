// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)`;
  } else if (license === "GPL 3.0") {
    return `![License: GPL](https://img.shields.io/badge/License-GPL%20v3-blue.svg)(https://opensource.org/licenses/GPL-3.0)`;
  } else if (license === "BSD 3-Clause") {
    return `![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)(https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === "none") {
    return '';
  }
  return '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "none") {
    return '';
  }
  return `## License

This project is licensed under the ${license} license.`;
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
1.[Installation](#installation)
2.[Usage](#usage)
3.[License](#license)
4.[Contributing](#contributing)
5.[Tests](#tests)
6.[Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributors
${data.contribution}

## Tests
${data.tests}


## Questions
-Github: [${data.username}](https://github.com/${data.username})
-Email:[${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;//resolves syntax error

// Used Xpert Learning to assist with code 