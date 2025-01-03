const analyzeArray = require('../src/analyzeArray');

describe('analyzeArray', () => {
    test('calculates the average, min, max, and length', () => {
        const result = analyzeArray([1, 2, 3, 4, 5]);
        expect(result.average).toBe(3);
        expect(result.min).toBe(1);
        expect(result.max).toBe(5);
        expect(result.length).toBe(5);
    });

    test('throws an error for empty array', () => {
        expect(() => analyzeArray([])).toThrow(Error);
    });

    test('throws an error for non-array input', () => {
        expect(() => analyzeArray('test')).toThrow(Error);
    });

    test('throws an error for non-numeric array elements', () => {
        expect(() => analyzeArray([1, 2, 'a', 4])).toThrow(Error);
    });
});