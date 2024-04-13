// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](http://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return'';
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This project is licensed under the ${license} license.`;
  }
  return'';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Badges](#badges)

* [Visuals](#visuals)

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Support](#support)

* [Roadmap](#roadmap)

* [Contributing](#contributing)

* [Authors and acknowledgment](#authorsandacknowledgment)

* [Tests](#tests)

* [Questions](questions)

## Badges

## Visuals

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Support

## Roadmap

## Contributing

${data.contributing}

## Authors and Acknowledgement

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions or suggestions on how to improve the information on this page about, open an issue or contact me directly at ${
  data.email
}. You can find more of my work at [${data.github}](https://github.com/${
  data.github
}/).

`;
}

module.exports = generateMarkdown;
