// include packages needed for this application
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

const handleLicense = (answer) => answer.hasLicense === "Y".toLowerCase();

// questions that are being asked
const questions = [
  {
    type: "input",
    name: "github",
    message: "Whatis your github username???",
  },
  {
    type: "input",
    name: "hasLicense",
    message: "Do you have a license? (Y/N)",
  },
  {
    type: "input",
    name: "licenseLink",
    message: "What is your license link?",
    when: (answer) => handleLicense(answer),
  },
  {
    type: "input",
    name: "licenseYear",
    message: "What is your license year?",
    when: (answer) => handleLicense(answer),
  },
  {
    type: "input",
    name: "licenseName",
    message: "What is your license name?",
    when: (answer) => handleLicense(answer),
  },
  {
    type: "input",
    name: "namedProject",
    message: "Please provide the name of your project",
  },
  {
    type: "input",
    name: "describeProject",
    message: "Describe your project",
  },
];

// Create a function to write README file
const writeToFile = (fileName, data) => {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// Create a function to initialize app
const init = () => {
  inquirer.prompt(questions).then((inquirerResponse) => {
    console.log("Generating README.....");
    writeToFile("README.md", generateMarkdown({ ...inquirerResponse }));
  });
};

// Function call to initialize app
init();
