var a = prompt("Give the first value");
var b = prompt("Give the second value");

var value = a * a + 2 * a * b - b * b;
console.log("The result of this operation is " + value);

if(value > 0) {
	console.log("The value is positive");
}
else if(value < 0) {
	console.log("The value is negative");
}
else {
	console.log("The value is equal to 0");
}