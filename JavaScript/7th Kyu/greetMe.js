/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
*/

// Answer // 

function greet(name){
    name = name.toLowerCase()
    let firstLetter = name[0].toUpperCase()
    return `Hello ${firstLetter + name.slice(1)}!`
}
