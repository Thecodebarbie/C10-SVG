const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type:'list',
        message:'Choose the following shape:',
        name:'shape',
        choices:['circle', 'square', 'triangle']
    },
    {
        type:'input',
        message:'Enter three characters:',
        name:'text',
    },
    {
        type:'input',
        message:'Enter text color:',
        name:'textColor',
    },
    {
        type:'input',
        message:'Enter shape color:',
        name:'shapeColor',
    }
]

inquirer.prompt(questions)
