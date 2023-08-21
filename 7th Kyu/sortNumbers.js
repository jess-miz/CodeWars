/* Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

Examples: 

solution([1, 2, 10, 50, 5]); // [1,2,5,10,50]
solution(null); // []

*/

// Answer //


function sortNums(arr){
    return !arr ? [] : arr.sort((a,b) => a - b) 
}

