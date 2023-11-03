/*
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/

// Answer // 
function take(arr, n) {
    return arr.filter((x, i) => i < n )
}
