const Shape = require('./shape');

class Square extends Shape {
  render() {
    const width = 100;
    const x = 100;
    const y = 50;
    return `<rect x="${x}" y="${y}" width="${width}" height="${width}" fill="${this.color}" />`;
  }
}

module.exports = Square;