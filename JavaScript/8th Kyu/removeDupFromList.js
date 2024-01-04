/*
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
*/

// Answer // 
function distinct(a) {
    return a.filter((x, i) => a.indexOf(x) === i)
}