const animals = ['fox', 'dog', 'cat', 'rat', 'bird', 'fish'];

// wzór pętli for
console.log('pętla for');

for (let i = 0; i < 10; i++) {
	console.log(i);
}

// zapis uniwersalny
for (let i = 0; i < animals.length; i++) {
	console.log(animals[i]);
} // pętla for będzie interować po długości (length) tablicy animals

//pętla while || do ... while
console.log('pętla while');

let i = 0;

while (i < 5) {
	console.log(i);
	i++;
} // pętla while będzie wykonywać się dopóki nie spełni się warunek i < 5

// pętla do ... while
console.log('do ... while');

let j = 0;

do {
	j++;
	console.log(j);
} while (j < 2);

// pętla for of
console.log('pętla for of');

const numbers = [1, 2, 3, 4, 5, 6];

for (const number of numbers) {
	console.log(number);
}
