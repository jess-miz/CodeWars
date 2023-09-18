/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
Example:

"CodEWaRs" --> [0,3,4,6]

*/

// Answer //

let capitals = function (word) {
    let arr = word.split('')
    let capitalLetters = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === arr[i].toUpperCase()){
        capitalLetters.push(i)
      }
    }
    return capitalLetters
  };
