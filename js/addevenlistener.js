const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');

// listener na końcu kodu
btn1.addEventListener('click', () => console.log('kliknięte'));
btn2.addEventListener('mouseover', () => console.log('najechanie'));
btn3.addEventListener('dblclick', () => console.log('dubleclick'));
