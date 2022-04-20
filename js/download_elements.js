// plik js do podstrony download-elements.html

// getElementById
console.log('getElementById');

const test = document.getElementById('idtodownload'); // pobieranie elementu id z pliku html
console.log(test);

// getElementsByTagName - używane przy 'żywych kolekcjach' - dodawanych elementów w DOMie a nie w html
console.log('getElementsByTagName');

const test2 = document.getElementsByTagName('li');
console.log(test2);

//getElementsByClassName - używane przy 'żywych kolekcjach' - dodawanych elementów w DOMie a nie w html
console.log('getElementsByClassName');

const test3 = document.getElementsByClassName('code');
console.log(test3);

// document.querySelector
console.log('querySelector');

const ulList = document.querySelector('ul.code--idclass'); // querySelector przeszukuje document i szuka ul z klasą code-idclass
console.log(ulList);

const liFirstElement = document.querySelector('li'); // querySelector przeszukuje document i szuka pierwszego li
console.log(liFirstElement);

// w () w querySelector można pisać metody z css takie jak nth-child

console.log('querySelectorAll');
const liAllElements = document.querySelectorAll('li'); // All szuka w document wszystkich li
console.log(liAllElements);
