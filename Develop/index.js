// TODO: Include packages needed for this application
    const path = require("path");
    const fs = require("fs");
    const inquirer = require("inquirer");
    const generateMarkDown = require("./generateMarkDown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"github",
        message:"What is your github Name?"
    },
    {
        type:"input",
        name:"email",
        message:"What is your email?"
    },
    {
        type:"input",
        name:"title",
        message:"What is your project name?"
    },
    {
        type:"list",
        name:"license",
        choices:["MIT", "ARACHE", "GPL", "None"]
    },
    {
        type:"input",
        name:"motivation",
        message:"What is your motivation of this project?"
    },
    {
        type:"input",
        name:"purpose",
        message:"What is your purpose of this project?"
    },
    {
        type:"input",
        name:"solved",
        message:"What problem did you solved in this project"
    },
    {
        type:"input",
        name:"learned",
        message:"What did you learn in this project?"
    },
    {
        type:"input",
        name:"installation",
        message:"What is the intallation?"
    },
    {
        type:"input",
        name:"usage?",
        message:"What is the usage"
    },
    {
        type:"input",
        name:"credit",
        message:"What is the credit?"
    },
    {
        type:"input",
        name:"test",
        message:"How to test?"
    },
    {
        type:"input",
        name:"installStep",
        message:"What is the step of the installation?"
    },
    {
        type:"input",
        name:"feature",
        message:"What is the feature?"
    },
    {
        type:"input",
        name:"testDetail",
        message:"How to test the project?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses)=>{
        console.log("Generating README...")
        writeToFile("README.md", generateMarkDown({...inquirerResponses}))
    })
}

// Function call to initialize app
init();
