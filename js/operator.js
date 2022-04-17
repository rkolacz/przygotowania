// js for operator.html

let x = 2;
let y = 4;

// operatory arytmetyczne

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

x = x + y; // zmienia zmienną x o wartości 2 na 2 + y(4)
x += y; // wersja skrócona
console.log(x);

x = x - y;
x -= y; // analogicznie do dodawania

x *= y;
x /= y;
x %= y;

console.log(x);
