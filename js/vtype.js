// js for vtype.html

const text = 'Ciąg znaków w apostrofach';

console.log(typeof text);
console.log(text.length);

console.log(text.toUpperCase());

const newText = text.toLowerCase();

console.log(newText);

const username = 'rafał';

const newUsername = username.charAt(0).toUpperCase() + username.slice(1);

console.log(newUsername);

const num1 = 1;
const num2 = '1';

const addNums = num1 + num2;
console.log(addNums);
console.log(typeof addNums);
console.log(parseInt(addNums));

const num3 = 1.234;

const newNum3 = num3.toFixed(1);
console.log(newNum3);

let a;
let b = null;
console.log(a, b);

const obj = {
	name: 'Rafal',
	age: 30,
	city: null,
};

const colors = ['red', 'green', 'blue'];

console.log(colors);

function x() {
	console.log('consol log w funkcji');
}

x();
