const fs = require('fs')
const inquirer = require('inquirer')
const generateHTML = require('./src/html.js')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const answersArr = []
const employeeArray = []

const promptManager = () => {
    inquirer.promptMN([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the team manager's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?"
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "What is the team manager's office number?"
        }
    ])
    .then((answers) => {
        answersArr.push(answers)
        promptNextEmployee()
    })
}

const promptEngineer = () => {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the engineer's name?"
                },
                {
                    type: 'number',
                    name: 'id',
                    message: "What is the engineer's employee ID?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the engineer's email?"
                },
                {
                    type: 'input',
                    name: 'username',
                    message: "What is the engineer's GitHub username?"
                },
            ])
            .then((answers) => {
                answersArr.push(answers)
                promptNextEmployee()
            })
        }
        const promptIntern = () => {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the intern's name?"
                },
                {
                    type: 'number',
                    name: 'id',
                    message: "What is the intern's employee ID?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the intern's email ?"
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What school is the intern attending?"
                },
            ])
            .then((answers) => {
                answersArr.push(answers)
                promptNextEmployee()
            })
        }
        const promptNextEmployee = () => {
            inquirer.prompt([
                {
                    type: "list",
                    name: "nextEmployee",
                    message: "Add another employee?",
                    choices: ["Engineer", "Intern", "Done"]
                },
            ])
            .then((answers) => {
                if (answers.nextEmployee === "Engineer") {
                    promptEngineer()
                } else if (answers.nextEmployee === "Intern") {
                    promptIntern()
                } else {
                    answersArr.forEach((employee) => {
                        if (employee.officeNumber) {
                            const mgmt = new Manager(employee.name, employee.id, employee.email, employee.officeNumber)
                            employeeArray.push(mgmt)
                        } else if (employee.github) {
                            const eng = new Engineer(employee.name, employee.id, employee.email, employee.github)
                            employeeArray.push(eng)
                        } else {
                            const int = new Intern(employee.name, employee.id, employee.email, employee.school)
                            employeeArray.push(int)
                        }
                    })
                    const group = generateHTML.generateHTML(employeeArray)

            fs.writeFile('./dist/profile.html', group)
        }
    })
}
promptManager()