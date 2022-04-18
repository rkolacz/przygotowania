const pass = '123qweasdzxc!';

// if
console.log('instrukcja warunkowa IF');
if (pass.length >= 0) {
	// if sprawdza czy długość zmiennej pass jest większa lub równa 0
	console.log(true); // jeżeli true pokaż w konsoli true
} // jeżeli false to nic nie wyświetlaj

// if else
console.log('IF ELSE');
if (pass.length > 10) {
	// if sprawdza czy długość zmiennej pas jest większa niż 10
	console.log('hasło jest ponad 10 znakowe'); // jeśl true wyświetl clg
} else {
	console.log('hasło jest krótsze niż 10 znaków'); // jeżeli false wykonaj else z clg
}

// if else if else
const specialSign = '!';

console.log('IF | ELSE IF | ELSE');

if (pass.length > 10 && pass.includes(specialSign)) {
	// if sprawdza czy długość zmiennej pas jest większa niż 10 i czy ma w sobie stirng '!'
	console.log(`hasło jest ponad 10 znakowe + znak specjalny ${specialSign}`); //jeśl true wyświetl clg
} else if (pass.length > 10) {
	console.log('haslo jest ponad 10 znakowe'); //jeżeli if wyżej == false wykonaj else z clg jeśli if == true
} else {
	console.log('hasło jest za krótkie'); // jeżeli if wyżej == false wykonaj else z clg
}

// switch
console.log('switch');
let day = '1';
switch (day) {
	case '1':
		console.log('1');
		break;

	case '2':
		console.log('2');
		break;

	case '3':
		console.log('3');
		break;

	case '4':
		console.log('4');
		break;

	case '5':
		console.log('5');
		break;

	default:
		console.log('weekend');
} // po znalezieniu case kod się zatrzymuje, jak nie znajdzie żadnego wykonuje się default

// operator warunkowy
console.log('operator waunkowy');

const x = 100;

console.log(x > 20 ? `${x} > 20` : `${x} < 20`); // wartość ? (if) warunek TRUE : (else) FALSE

// to co wyżej tylko w wersji z if i else
if (x > 20) {
	console.log(`${x} > 20`);
} else {
	console.log(`${x} < 20`);
}
