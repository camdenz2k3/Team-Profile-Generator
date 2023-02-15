const fs = require('fs')
const inquirer = require('inquirer')
const generateHTML = require('./src/generateHTML.js')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

let managerCard = ``
let engineerCards = ``
let internCards = ``

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
        type: 'number',
        name: 'officeNumber',
        message: "What is the team manager's office number?"
    }
])
.then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    managerCard = generateHTML.generateManagerCard(manager)
    building()
})


function building() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'building',
            message: "Would you like to add an engineer or an intern or to finish building the team?",
            choices: ['engineer', 'intern', 'finish building team']
        }
    ])
    .then((answer) => {
        if (answer.building === 'engineer') {
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
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.username)
                const engineerCard = generateHTML.generateEngineerCard(engineer)
                engineerCards += engineerCard
            })
            .then(() => {
                building()
            })
        } else if (answer.building === 'intern') {
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
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                const internCard = generateHTML.generateInternCard(intern)
                internCards += internCard
            })
            .then(() => {
                building()
            })
        } else if (answer.building === 'finish building team') {
            const group = generateHTML.generateHTML(managerCard, engineerCards, internCards)

            fs.writeFile('./dist/team-profile.html', group)
        }
    })
}