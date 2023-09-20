/*
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
*/

// Answer // 

//PREP

// given a num could i round it put to the next multiple of 5
//p - whole, + -, num 
// return a num, multiple of 5 


function roundToNext5(n){ 
   return Math.ceil(n/5) * 5;
}
