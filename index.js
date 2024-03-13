const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const shapes = {
  circle: require('./lib/circle'),
  triangle: require('./lib/triangle'),
  square: require('./lib/square')
};



function promptWithValidation(type, name, message, validate) {
    return {
      type,
      name,
      message,
      validate,
    };
  }

async function getUserInput() {
    const answers = await inquirer.prompt([
      promptWithValidation(
        'input',
        'text',
        'Enter characters (max 3):',
        input => input.length <= 3 && input.length > 0
      ),
      promptWithValidation(
        'input',
        'textColor',
        'Enter color of text:',
        input => /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(input) || /^[a-zA-Z]+$/i.test(input)
      ),
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      promptWithValidation(
        'input',
        'shapeColor',
        'Enter color of shape:',
        input => /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(input) || /^[a-zA-Z]+$/i.test(input)
      ),
    ]);
  
    return answers;
  }

function createSVG(text, textColor, shapeType, shapeColor) {
  const Shape = shapes[shapeType];
  if (!Shape) {
    throw new Error('Invalid shape');
  }

  const shape = new Shape(shapeColor);

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="150" y="100" fill="${textColor}" font-family="Verdana" font-size="35" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>
  `;

  const outputPath = './examples/logo.svg';

  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, svgContent);
}

async function main() {
  const userInput = await getUserInput();
  const { text, textColor, shape, shapeColor } = userInput;
  createSVG(text, textColor, shape, shapeColor);
  console.log('SVG created!');
}

main();
