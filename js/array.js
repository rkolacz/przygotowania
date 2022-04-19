// shift i unshift

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);

console.log('shift');
numbers.shift(100, 200); // dodaje wartości z () na początek tablicy
console.log(numbers);

console.log('unshift');
numbers.unshift(); // usuwa wartość z indeksu 0 z tablicy
console.log(numbers);

// push i pop
const colors = ['blue', 'red', 'black'];
console.log(colors);

console.log('push');
colors.push('green', 1500100900); // dodaje wartość z () na koniec tablicy
console.log(colors);

console.log('pop');
colors.pop(); // usuwa wartość z ostatniego indeksu tablicy
console.log(colors);

//map - metoda niedestrukcyjna - tworzy nową tablicę zamiast ją zmieniać
console.log('map');

function multiply(x) {
	return x * 2;
}

const newNumbers = numbers.map(multiply); // iteruje przez wszystkie indeksy tablicy i dodaje to co w funkcji
console.log(newNumbers);

// concat - dodaje do tablicy wartości z ()
console.log('concat');

const abc = ['a', 'b', 'c'];
const newAbc = abc.concat(1, 2, 3, numbers, true, 'string'); // można dodać wszystko
console.log(newAbc);

//spread i rest ...
console.log('spread i rest');

const drinks = ['napój 1', 'napój 2', 'napój 3'];
const meals = ['danie 1', 'danie 2', 'danie 3'];

const menu = [...drinks, ...meals]; // po dodaniu na początku zmiennej ... wyciąga stringi z tablicy - w tym przypadku tworzy przy okazji nową tablicę
console.log(menu);
// DODAĆ DO PLIKU ARRAY.HTML // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// slice - metoda niedestrukcyjna
console.log('slice');

const numbers2 = [0, 0, 1, 2, 3, 4, 2, 2, 2];

const numbers3 = numbers2.slice(0, 2); // podaje metodzie w () index od do wycinanych elementów tablicy
console.log(numbers3);

const numbers4 = numbers2.slice(-3); // podaje metodzie w () ile elemenów ma usunąć od konca tablicy
console.log(numbers4);

// splice - metoda destrukcyjna
console.log('splice');

const colors2 = ['red', 'green', 'blue', true, 123];

const randomStuff = colors2.splice(-2); // podaje metodzie w () ile elemenów ma usunąć od konca tablicy - destrukturyzuję ją
console.log(colors2); // brakuje w tablicy dwóch ostatnich elementów
console.log(randomStuff); // dwa brakujące elementy tablicy z colors2

const cars = [1, 2, 'auto 1', 'auto 2', 'auto 3', 'auto 4', 3, 4];

const newCars = cars.splice(2, 4, 'test'); // pierwsza wartość to indeks od którego elementu zacząć wycinanie, druga ile elementów wyciąć, trzecia opcjonalnie dodaje wypisany element do starej tablicy w miejsce wyciętych
console.log(newCars);
console.log(cars);
