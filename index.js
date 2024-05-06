const inquirer = require('inquirer')
const fs = require('fs')
const Triangle = require('./lib/triangle')
const Square = require('./lib/square')
const Circle = require('./lib/circle')

const questions = [
    {
        type: 'list',
        message: 'Choose the following shape:',
        name: 'shape',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        message: 'Enter three characters:',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter text color:',
        name: 'textColor',
    },
    {
        type: 'input',
        message: 'Enter shape color:',
        name: 'shapeColor',
    }
]
inquirer.prompt(questions)
    .then(data => {
        if (data.shape === 'circle') {

        }
        else if (data.shape === 'triangle') {
            const triangle = new Triangle(data.text, data.textColor, data.shapeColor)
            fs.writeFile('./examples/triangle.svg', triangle.render(), err=>{
                if(err) console.error(err)
                console.log('success')
            })
        } else {

        }
    })


