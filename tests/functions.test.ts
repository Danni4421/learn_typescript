import { sayHello } from '../src/functions';

describe('Typescript Functions Tests', () => {
  describe('sayHello function', (): void => {
    it('should return Hello, John Doe', (): void => {
      // Arrange
      const name: string = 'John Doe';

      // Action and Assert
      expect(sayHello(name)).toBe('Hello, John Doe');
    });
  });
});
