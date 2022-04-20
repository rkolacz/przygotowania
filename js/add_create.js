// js dla podstrony add-create.html

const ulList = document.createElement('ul'); // tworzy element ul
const liItem = document.createElement('li'); // tworzy element li
liItem.textContent = 'dodane li przez .js'; // dodaje do liItem string

document.body.appendChild(ulList); // dodaje do body (na dole) ulLust (ul)
ulList.appendChild(liItem); // dodaje do ulList (ul) liItem (li)

const exercise1 = document.querySelector('p');
console.log(exercise1);

const span = document.createElement('span');

exercise1.appendChild(span);
console.log(exercise1);

console.log('append');
// można stosować zamiast appendChild to append
