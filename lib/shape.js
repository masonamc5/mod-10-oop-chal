class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
  
    render() {
      throw new Error('The "render" method must be implemented in subclasses.');
    }
  }
  
  module.exports = Shape;