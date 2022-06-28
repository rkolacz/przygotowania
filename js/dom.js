// plik js do strony dom.html

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

helloWord(); // ta metoda tworzenia funkcji nie jest hoistingowana

// funkcja z parametrami/arumentami

function add(x, y) {
	// (x, y) parametry - nazwa parametru jest dowolna
	console.log(x + y);
}

add(2, 2); // (2, 2) argumenty

// parametry podaje się podczas tworzenia funkcji
// argumenty podaje się podczas wywołania funkcji

// funkcja anonimowa

const heading = document.querySelector('h3');

function test2() {
	console.log('kliknięte: ');
}

heading.addEventListener('click', test2);

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

// operator rest

const numbers2 = (x, y, ...z) => {
	// operator rest powoduje, że parametr z przyjmuje formę tablicy
	console.log(x, y, z);
};

numbers2(1, 2, 3, 4, 5, 6, 7, 8, 9, 0); // jeżeli nie było by przed parametrem z ... (rest) to funkcja wylogowałaby tylko 3 pierwsze argumenty
