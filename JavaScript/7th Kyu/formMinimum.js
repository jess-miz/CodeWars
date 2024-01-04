/*
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates)
*/

// Answer // 
function minValue(values){
    let filtered = values.filter((x,i) => values.indexOf(x) === i).sort((a,b) => a - b) 
    return parseInt(filtered.join('')) 
}
