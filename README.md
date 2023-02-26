# Professional README Generator 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) and Node.js v16. The readme file consists of sections such as title, description, table of contents, installation, usage, contributing guidelines, tests and questions. For the readme to be generated the user must input information in the command-line based on the prompts, which structure the markdown file. Included in the repository files are the two javascript files index.js (main) and generateMarkdown.js. Also inside is a Package.json for metadata and dependencies, which allow package managers like `npm init` to install. See installation and usage for proper use of the application. This application is built for the purpose of making professional readme's for new upcoming projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Assure that node.js is installed preferably version 16(stable), found on https://nodejs.org/en/download/. To make sure the application is running correctly, the user needs to install two packages, namely inquirer version 8.2.4 and email-validator. To install these packages, the user should run the following commands in the terminal: `npm i inquirer@8.2.4` and `npm i email-validator`. When installing, it is important that you are in the correct directory (develop) otherwise issues may transpire.

## Usage

After installing the required files above, in your prefered command terminal you must type `node index.js` or `node index` to run the readme generator. You will be shown a series of prompts regarding each sections of project. Please make sure you fill each section as much for a quality readme file. Details for email and Github username will be asked, so have it ready when prompted. After adding necessary information about the project, press `enter` to go to the next section. In the license section, use the `arrow keys` to go through the different choices.  


For more help on usage, please view screenshot and video demonstration.
![screenshot]()

Video: 

## License

The project is licensed under: MIT License. To see the license permissions for commercial and non-commercial use, check the link https://opensource.org/licenses/MIT

## Contributing

This is an open source application, feel free to use this for projects README.md files. It is important to mention me as a contributor for distribution or modifications.
  
## Tests

During use, the generator should have node_modules and package-lock.json added in the file directory. To see if application processed accordingly there should be a readme generated called `professional_README.md`. 
  
## Questions

For any questions about the application, please contact gabetuason24@gmail.com or view the github https://github.com/gabetuason to find me
