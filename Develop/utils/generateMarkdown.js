// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "APACHE 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Eclipse") {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "GNU") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`;
  } else {
    return "";
  }
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === "APACHE 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === "Eclipse") {
    return `https://opensource.org/licenses/Eclipse`;
  } else if (license === "Mozilla") {
    return `https://opensource.org/licenses/Mozilla`;
  } else if (license === "GNU") {
    return `https://opensource.org/licenses/GNU`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderTableLicense(license) {
  if (license !== "None") {
    return `
## Table of Contents 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Badge](#badge)
* [Questions](#questions)
    `;
  } else {
    return `
## Table of Contents 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Badge](#badge)
* [Questions](#questions)
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  ${renderLicenseBadge(data.license)}  
## Description
${data.description}
${renderTableLicense(data.license)}
## Installation
To install, run the following command:  
\`\`\`
${data.installation}
\`\`\`
## Usage  
${data.usage}

## Contributing
${data.contributing}
## License
${data.license}
${renderLicenseLink(data.license)}
## Badge
${data.badge}
## Questions
* If you have any questions or concerns, please contact me at https://github.com/${data.github} or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
