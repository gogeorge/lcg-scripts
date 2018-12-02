/*

Author: George Valtas

2018

A script that finds the period length
of a linear congruential generator.

*/


// Xn = aXn-1 + c (mod m)

var a = 11
    c = 34
    m = 103

// first two random numbers in the series
X = [57, 43]

for ( i = 1; i < 1000; i++ ) {
	X[i] = ( a * X[i-1] + c ) % m
} 
// this gives the first 999 random numbers of the series
console.log(X)

if ( X.includes(57) ) {
	// var index takes the random number we want to look for in the series
	var index = X.indexOf(57);
	if ( index !== -1 ) X.splice(index, 1)
	/* 
	if a number in the series is equal to 57
	then we want to find its index in the array
	and so we use the findIndex() method
	*/
	function period(e) { 
		return e == 57
	}
	/*
	In the math article, the output is 103 instead of 101.
	Mathematically it is 103 but here it is 101 for the two reasons:
	- arrays are zero inxeded, so the "0th" number is not considered (so 103 becomes 102)
	- i removed the seed number (57) so i could make this program work (so 102 becomes 101) 
	*/
	console.log(X.findIndex(period)) // output: 101
	// to check if the 101th number is 57 we try this:
	console.log(X[101]) // output: 57 
}
