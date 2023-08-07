import { invoice } from './invoice.js';
import { payment } from './payment.js'
import { HasFromatter } from './Hasformatter.js';

let docOne: HasFromatter;
let doctwo: HasFromatter;

docOne = new invoice('yoshi', 'web work', 250);
doctwo = new payment('mario', 'plumbing work', 200);

let docs: HasFromatter[] = [];

docs.push(docOne);

docs.push(doctwo);