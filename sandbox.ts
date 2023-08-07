import { invoice } from './Interfaces/invoice.js';
import { payment } from './Interfaces/payment.js'
import { HasFromatter } from './Interfaces/Hasformatter.js';

// const character = "mario";
// console.log(character);

// const input = document.querySelectorAll('input');
// console.log(input);
// input.forEach(input => {
//     console.log(input);
// })

//The DOM & Type Casting

const anchor = document.querySelector('a')!;

// if (anchor) {
//     console.log(anchor.href)
// }

const from = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(from.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

from.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let values: [string, string, number]

    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFromatter;
    if (type.value == 'invoice') {
        doc = new invoice(...values)
    } else {
        doc = new payment(...values)
    }
})

