/* Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Examples: 

Input: [1,2,3,4,5], output = [2,3,4,5]
Input: [5,3,2,1,4], output = [5,3,2,4]

*/

// Answer //

function removeSmallest(arr) {
    const smallest = Math.min(...arr);
    const index = arr.indexOf(smallest);
        
    return arr.filter((_, i) => i !== index);
}