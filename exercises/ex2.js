// pilk js dla strony ex2.html

let celsius;
let temp;

const fahrenheit = (x) => {
	celsius = x;
	temp = celsius * 1.8 + 32;
};

fahrenheit(100);
console.log(`${celsius}C to ${temp}F`);
