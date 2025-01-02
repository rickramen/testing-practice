const capitalize = require('../src/capitalize');

describe('capitalize', () => {
    test('capitalizes the first letter of a string', () => {
        expect(capitalize('test')).toBe('Test');
    });

    test('works with single-letter strings', () => {
        expect(capitalize('a')).toBe('A');
    });

    test('throws an error for empty and non-string input', () => {
        expect(() => capitalize(123)).toThrow(TypeError);
        expect(() => capitalize({})).toThrow(TypeError);
        expect(() => capitalize(null)).toThrow(TypeError);
        expect(() => capitalize('')).toThrow(TypeError);
    });
});
