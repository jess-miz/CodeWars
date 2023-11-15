/*
write a function that returns the number of errors in a str over the length of the str
an error is any letter not a-m
*/

// Answer // 
function printerError(s) {
    let errors = s.split('').filter(x => x > 'm')
    return `${errors.length}/${s.length}`
}
