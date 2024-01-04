/*
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

*/

// Answer // 

function towerBuilder(nFloors) {
 let results = [];
 for(let i=0; i < nFloors; i++) {
   let stars = '*'.repeat(nFloors - i + (nFloors -1 - i));
   let spaces = ' '.repeat(i);
   results.push(spaces + stars + spaces);
 }
  return results.reverse();
}

