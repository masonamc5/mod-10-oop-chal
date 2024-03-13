const Shape = require('./shape');

class Circle extends Shape {
  render() {
    const radius = 80; 
    const cx = 150; 
    const cy = 100; 
    return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${this.color}" />`;
  }
}

module.exports = Circle;