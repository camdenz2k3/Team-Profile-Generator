const fs = require('fs')
const inquirer = require('inquirer')
const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const answersArray = []
const employeeArray = []

const promptManager = () => {
    inquirer.prompt([
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
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?"
        }
    ])
    .then((answers) => {
        answersArray.push(answers)
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
                answersArray.push(answers)
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
                answersArray.push(answers)
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
                    answersArray.forEach((employee) => {
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
            fs.writeFileSync('./dist/profile.html', generateHTML(employeeArray))
        }
    })
}
promptManager()