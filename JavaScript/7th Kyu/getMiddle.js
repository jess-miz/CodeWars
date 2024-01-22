/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/

// Answer // 
function getMiddle(s){
    let letters = s.toLowercase().split('')
    if (letters.length % 2 !== 0){
      return letters[Math.floor(letters.length/2)]
    } else {
      return letters[letters.length/2 - 1] + letters[(letters.length/2)]
    }
}
