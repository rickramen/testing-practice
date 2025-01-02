const reverseString = require('../src/reverseString');

describe('reverseString', () => {
    test('reverses a regular string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('reverses a string with spaces', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('throws an error for empty and non-string input', () => {
        expect(() => reverseString(123)).toThrow(TypeError);
        expect(() => reverseString({})).toThrow(TypeError);
        expect(() => reverseString(null)).toThrow(TypeError);
        expect(() => reverseString('')).toThrow(TypeError);
    });
});