function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }
    if (!arr.every(item => typeof item === 'number')) {
        throw new Error('Array must contain only numbers');
    }
    
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return {
        average: sum / length,
        min: min,
        max: max,
        length: length
    };
}

module.exports = analyzeArray;
