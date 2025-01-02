function reverseString(str) {
    if (typeof str !== 'string' || str.length === 0) {
        throw new TypeError('Input must be a non-empty string');
    }
    return str.split('').reverse().join('');
}

module.exports = reverseString;