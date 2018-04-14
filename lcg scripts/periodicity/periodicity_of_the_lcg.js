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
	/*var newX = X.filter(function(e) {
		return e !== 57
	})*/
	//debug('new array: ' + newX)
	var index = X.indexOf(57);
	if ( index !== -1 ) X.splice(index, 1)
	function period(e) { 
		return e == 57
	}
	console.log(X.findIndex(period))
	console.log(X[101])
}