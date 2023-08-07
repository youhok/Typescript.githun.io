// const character = "mario";
// console.log(character);
// const input = document.querySelectorAll('input');
// console.log(input);
// input.forEach(input => {
//     console.log(input);
// })
//The DOM & Type Casting
var anchor = document.querySelector('a');
// if (anchor) {
//     console.log(anchor.href)
// }
var from = document.querySelector('.new-item-form');
// console.log(from.children);
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
from.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
