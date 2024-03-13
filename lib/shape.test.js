describe('Shape Classes', () => {
    let Circle, Triangle, Square;
  
    beforeAll(async () => {
      Circle = (await import('./circle')).default;
      Triangle = (await import('./triangle')).default;
      Square = (await import('./square')).default;
    });
  
    describe('Circle', () => {
      test('renders correct SVG for Circle', () => {
        const circle = new Circle('red');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
      });
    });
  
    describe('Triangle', () => {
      test('renders correct SVG for Triangle', () => {
        const triangle = new Triangle('blue');
        expect(triangle.render()).toEqual('<polygon points="150,20 230,180 70,180" fill="blue" />');
      });
    });
  
    describe('Square', () => {
      test('renders correct SVG for Square', () => {
        const square = new Square('green');
        expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
      });
    });
  });
  