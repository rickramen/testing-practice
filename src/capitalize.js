function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
        throw new TypeError('Input must be a non-empty string');
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalize;
