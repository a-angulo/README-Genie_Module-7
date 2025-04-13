// Function to generate markdown for README
function renderLicenseBadge(license) {
  const badges = {
    "Apache License 2.0": `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    "MIT License": `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    "GPL 3.0": `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
    "BSD 3-Clause": `[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
  };

  return badges[license] || '';
}

function renderLicenseSection(license) {
  if (!license || license === "none") return '';
  return `## License

This project is licensed under the ${license}.`;
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)  
2. [Usage](#usage)  
3. [License](#license)  
4. [Contributing](#contributors)  
5. [Tests](#tests)  
6. [Questions](#questions)  

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributors
${data.contribution}

## Tests
${data.tests}

## Questions
GitHub: [${data.username}](https://github.com/${data.username})  
Email: [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;