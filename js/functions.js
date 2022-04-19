// plik js do strony functions.html - BRAK UZUPEŁNIONEGO HTMLa

// delkaracja funkcji
console.log('delkaracja funkcji');

function test() {
	console.log('wyświetl funkcje test');
}
// taka funkcja podlega hoistingowaniu (windowaniu)

test(); // niezależnie gdzie będzie wywołana ta funkcja zawsze się wykona

// wyrażenie funkcyjne
console.log('wyrażenie funkcyjne');

const helloWord = function () {
	console.log('wyświetl funkcje w zmiennej helloWord');
};

helloWord();

// funkcja z parametrami/arumentami

function add(x, y) {
	// (x, y) parametry
	console.log(x + y);
}

add(2, 2); // (2, 2) argumenty

// funkcja anonimowa

const heading = document.querySelector('h1');

function test() {
	console.log('kliknięte: ');
}

heading.addEventListener('click', test);

// funkcja strzałkowa =>

const arrowFunction = () => {
	// tak wygląda funkcja strzałkowa
};

const arrow1 = (name) => {
	console.log(`mam na imię ${name}`);
};
// fat arrow, arrow function nie potrzebuję nawiasów w parametrach ani nawiasów klamrowych jeżeli jest jeden parametr w () i jeden element w {}
arrow1('Rafał');

// domyślne parametry funkcji
const hello = (name = 'użytkowniku') => {
	console.log(`Cześć, ${name}`);
};

hello(); // gdy wywoła się funkcja bez podania argumentów to pojawi się domyślny parametr z funkcji 'użytkowniku'
hello('Rafał'); // jeżeli podamy argument przy wywołaniu funkcji to zastąpi on domyślny parametr
