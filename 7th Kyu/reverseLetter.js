/*
Given a string str, reverse it and omit all non-alphabetic characters.
*/

// Answer // 
function reverseLetter(str) {
    return str.match(/[a-z]/g).reverse().join('');
}
