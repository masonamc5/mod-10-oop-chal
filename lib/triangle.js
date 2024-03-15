const Shape = require('./shape');

class Triangle extends Shape {
  render() {
    const points = '150,20 230,180 70,180';
    return `<polygon points="${points}" fill="${this.color}" />`;
  }
}

module.exports = Triangle;