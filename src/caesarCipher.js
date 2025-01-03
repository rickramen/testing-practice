
function shiftChar(char, shift) {
    const code = char.charCodeAt(0);
    let newCode;

    if (char >= 'a' && char <= 'z') {  
        newCode = ((code - 97 + shift) % 26 + 26) % 26 + 97;
    } else if (char >= 'A' && char <= 'Z') {  
        newCode = ((code - 65 + shift) % 26 + 26) % 26 + 65;
    } else {  
        return char;
    }

    return String.fromCharCode(newCode);
}

function caesarCipher(str, shift) {
    if (typeof str !== 'string' || str.length === 0) {
        throw new TypeError('Input must be a non-empty string');
    }
    return str.split('').map(char => shiftChar(char, shift)).join('');
}

module.exports = caesarCipher;
