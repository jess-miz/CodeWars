/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters). 
*/

// Answer // 
function vowelIndices(word) {
    let arr = [];
    for(let i = 0; i < word.length; i++) {
      if(/[aeioyu]/i.test(word[i])) {
        arr.push(i+1);
      }
    }
    return arr;
}