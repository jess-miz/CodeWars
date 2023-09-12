/*
Your objective is to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
*/

// Answer //

function squareDigits(num){
    return Number(String(num).split('').map(num => num ** 2).join(''));
}