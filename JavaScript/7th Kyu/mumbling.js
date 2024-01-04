/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/


// Answer // 

function accum(s) {
	return ((s.toLowerCase()).split('')).map((x, i) => x[0].toUpperCase() + (x.repeat(i))).join('-')
}
