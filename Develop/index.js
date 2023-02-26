// Including packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// Package for email, makes sure email is properly formatted.
const validates = require("email-validator");
// GenerateMD located in develop under utils
const generateMd = require("./utils/generateMarkdown");

// Array of questions for user input.
const questions = [
 {
    type: "input",
    message: "What would you want to title this project: ",
    name: "title",
   validate: function (input) {
      if (!input) {
        return "Cannot be left blank. Please enter a title for your project";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Make a description about the project: ",
    name: "description",
    validate: function (input) {
      if (!input) {
        return "Cannot be left blank. Please write a description for your project";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Add installation instructions: ",
    name: "installation",
    validate: function (input) {
      if (!input) {
        return "Cannot be left blank. Please add installtion instructions";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Provide usage information for project: ",
    name: "usage",
    validate: function (input) {
      if (!input) {
        return "Cannot be left blank. Please input usage information";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Provide project contribution information: ",
    name: "contributing",
    validate: function (input) {
      if (!input) {
        return "Cannot be left blank. Please add contribution information";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Include test instructions for your project: ",
    name: "tests",
    validate: function (input) {
      if (!input) {
        return "Cannot be left blank. Please type some test instructions";
      } else {
        return true;
      }
    },
  },
  {
    // Licensing will determine what will be placed under the license of the project
    type: "list",
    message: "Choose a license for your project [Use arrow keys and 'enter' to select]",
    name: "license",
    choices: [
      "None",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-clause",
      "BSD 3-clause",
      "Boost Software License 1.0",
      "Eclipse Public License",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    message: "What is your Github username: ",
    name: "username",
    validate: function (input) {
      if (!input) {
        return "Github username required";
      } else {
        return true;
      }
    },
  },
  {
  // Uses a regular expression to validate that the input value is a valid email address format
    type: "input",
    message: "Enter your email address: ",
    name: "email",
    validate: function (value) {
      return validates.validate(value)
        ? true
        : "Please ensure you are entering a valid email address: example@gmail.com";
    },
  },
];

// A function to write README file. Uses fs.writeFile method from the Node.js File System (fs) module to write the markdown text 
// function calls another function called generateMd to generate a markdown text based on the input data.
function writeToFile(fileName, data) {
  const markdownText = generateMd(data);
  fs.writeFile(fileName, markdownText, (err) =>
    err ? console.log(err) : console.log("Successfully created readme file!")
  );
}

// Function to initialize app.
// Once the user has provided answers to all the questions, the then method is called on the returned Promise object to handle the user's response. 
// The response object contains the user's answers to all the questions, which are logged to the console.
function init() {
    inquirer.prompt(questions)
        .then(response => {
            console.log(response);
            writeToFile('professional_README.md', response);
        })
}
// Function call to initialize app
init();
