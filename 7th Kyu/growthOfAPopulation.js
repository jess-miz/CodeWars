/* In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
  
p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

Example:

nb_year(1500, 5, 100, 5000) -> 15

*/

// Answer // 

function nbYear(p0, percent, aug, p) {
    percent = percent / 100
    let year = 0
    while (p0 < p){
      year+= 1
      p0 += Math.floor(p0 * percent) + aug
    }
  return year
}

nbYear(1500000, 2.5, 10000, 2000000) // 10