// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "title",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I Need a Value To Continue";
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "how do you install your app?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I Need a Value To Continue";
      }
    },
  },
  {
    type: "input",
    name: "instructions",
    message: "instructions to follow",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I Need a Value To Continue";
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "how do you use your app?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I Need a Value To Continue";
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "contributors",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I Need a Value To Continue";
      }
    },
  },
  {
    //TODO List of Licenses//
    type: "list",
    name: "license",
    message: "what licenses are being used?",
    choices: [
      "The MET License",
      "The GPL License",
      "Apache License",
      "GNU License",
      "MIT License",
    ],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I Need a Value To Continue";
      }
    },
  },
  {
    type: "input",
    name: "git",
    message: "GitHub username:",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I Need a Value To Continue";
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "e-mail",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I Need a Value To Continue";
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // TODO add fs code here to save file
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Your README has been generated");
  });
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answers) {
    const markdownText = generateMarkdown(answers);
    writeToFile("./dist/README.md", markdownText);
  });
}

// Function call to initialize app
init("node index.js");
