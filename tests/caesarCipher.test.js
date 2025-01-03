const caesarCipher = require('../src/caesarCipher');

describe('caesarCipher', () => {
    test('shifts characters correctly', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('preserves letter case', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('leaves punctuation and spaces unchanged', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });

    test('throws an error for empty and non-string input', () => {
        expect(() => caesarCipher(123)).toThrow(TypeError);
        expect(() => caesarCipher({})).toThrow(TypeError);
        expect(() => caesarCipher(null)).toThrow(TypeError);
        expect(() => caesarCipher('')).toThrow(TypeError);
    });
});
