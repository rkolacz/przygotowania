// pilk js dla strony ex3.html

const num = 10;
const numbers = [];

for (let i = 0; i < num; i++) {
	numbers.push(i);
}
console.log(numbers);

const threeZero = (x) => {
	if (x % 3 === 0 && x !== 0) {
		console.log(`${x} jest podzielne przez 3`);
	} else {
		console.log(`${x} nie jest podzielne przez 3`);
	}
};

numbers.forEach(threeZero);
console.log(numbers);
