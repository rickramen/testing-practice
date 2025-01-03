const calculator = require('../src/calculator');

describe('calculator', () => {
    test('adds two numbers', () => {
        expect(calculator.add(4, 3)).toBe(7);
    });

    test('subtracts two numbers', () => {
        expect(calculator.subtract(8, 4)).toBe(4);
    });

    test('multiplies two numbers', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
    });

    test('divides two numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
    });

    test('throws an error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow(Error);
    });
});
