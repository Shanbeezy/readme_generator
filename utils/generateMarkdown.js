// TO-DO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](http://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return'';
}

// TO-DO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TO-DO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This project is licensed under the ${license} license.`;
  }
  return'';
}

// TO-DO: Create a function to generate markdown for README
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

* [Authors and acknowledgement](#authorsandacknowledgment)

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

If you have any questions about this repo, open an issue or contact me directly at ${
  data.email
}. You can find more of my work at [${data.github}](https://github.com/${
  data.github
}/).

`;
}

module.exports = generateMarkdown;
