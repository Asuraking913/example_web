//DOM manipulation

const ul = document.querySelector('ul');

const new_div = document.createElement('li');

new_div.innerText = 'Asura';

ul.append(new_div);

const li = document.querySelectorAll('li');

// console.log(ul.parentNode);
// console.log(ul.parentElement);