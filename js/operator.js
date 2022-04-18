// js for operator.html

let x = 2;
let y = 4;

// operatory arytmetyczne
console.log('operatory arytmetyczne');

const add = x + y; // dodawanie wartości do siebie
console.log(add);

const substract = x - y; // odejmowanie
console.log(substract);

const multiply = x * y; // mnożenie
console.log(multiply);

const divide = x / y; // dzielenie
console.log(divide);

x++; // inkrementacja - doda 1 do wartości zmiennej x
console.log(`Inkrementacja x o wartości 2 do ${x}`);
x--; // dekrementacja - odejmie 1 od wartości zmiennej x
console.log(`dekrementacja x o wartości 3 do ${x}`);

const modulo = 10 % 3; // reszta z dzielenia - modulo podzieli 10 przez 3 i pokaże resztę 1
console.log(modulo);

// operatory przypisania
console.log('operatory przypisania');

x = x + y; // zmienia zmienną x o wartości 2 na 2 + y(4)
x += y; // wersja skrócona
console.log(x);

x = x - y;
x -= y; // analogicznie do dodawania

x *= y;
x /= y;
x %= y;

console.log(x);

// operatory porównania
console.log('operatory porównania');

console.log(10 == '10'); // równa zawartość - true
console.log(10 === '10'); // równa zawartość i typ - false
console.log(10 === 10);
console.log('10' === '10'); // jedno i drugie true

console.log(10 != '10'); // różna zawartość - false
console.log(10 !== '10'); // różna zawartość i typ - true
console.log(10 !== 10);
console.log('10' !== '10'); // jedno i drugie false

console.log(10 > 5); // większe niż
console.log(10 < 5); // mniejsze niż
console.log(10 <= 5); // większe lub równe niż
console.log(10 >= 5); // mniejsze lub równe niż

// operatory logiczne
console.log('operatory logiczne');
