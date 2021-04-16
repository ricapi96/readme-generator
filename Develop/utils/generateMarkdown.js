// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "APACHE 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
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
${renderLicenseLink(data.license)}
## Contributing
${data.contributin}
## License
${data.license}
## Badge
${data.badge}
## Questions
* If you have any questions or concerns, please contact me at ${data.github} or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
