const { Triangle, Circle, Square } = require('./shapes'); // Import classes first

const inquirer = require('inquirer');
const fs = require('fs');

const shape = new Triangle();
shape.setColor("blue");



inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for the logo:',
    },

    {
      type: 'input',
      name: 'color',
      message: 'Enter the color for the text:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },

    {
      type: 'input',
      name: 'shape color',
      message: 'Enter shape color:',
    }
    
  ])
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case 'circle':
        shape = new Circle();
        break;
      case 'triangle':
        shape = new Triangle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:
        console.log('Invalid shape selection');
        return;
    }

    shape.setColor(answers.color);
    shape.setText(answers.text);

    const logoSVG = shape.render();

    fs.writeFileSync('logo.svg', `<svg width="100" height="100">${logoSVG}</svg>`);

    console.log('Generated logo.svg');
  });