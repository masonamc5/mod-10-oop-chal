const Shape = require('./shape');

class Triangle extends Shape {
  render() {
    const points = '50,50 100,100 0,100';
    return `<polygon points="${points}" fill="${this.color}" />`;
  }
}

module.exports = Triangle;