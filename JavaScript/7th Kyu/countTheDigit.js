/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.
*/

// Answer // 

function nbDig(n, d) {
    let count = []
    for(let i =0; i<= n; i++){
      let num = Math.pow(i, 2)
      num = num.toString()
      if(num.includes(d.toString()))
       count.push(num)
    }
     return count.join('').split('').filter(x => x == d).length
}

// if you REALLY wanna go full codewars 
function nbDig(n, d) {
    return Array(n).fill(0).map((x,i)=> Math.pow(i + 1, 2).toString()).join('').split('').filter(x => x == d).length
}