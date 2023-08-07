// explicit types
let character: string;
let age: number;

let isloggedin: boolean;

age = 30;

isloggedin = true;
//arrays

let ninjas: string[];

ninjas = ['yoshi', 'mario'];
//konleag nis doch tv ng yg 
let arry = ['yoshi', 'mario'];

// if use want to push in empty arry u need to write
let hokie: string[] = [];

hokie.push('riki', 'Izzie');
// union types
//mixed array

let mixed: (string | number | boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string | number;

uid = '133';
uid = 123;

//objects

let ninjaOne: object;

ninjaOne = { name: 'yoshi', age: 30, };

let ninjaTwo: {
    name: string,
    age: number,
    beltcolour: string
}

ninjaTwo = { name: 'hokiee', age: 20, beltcolour: 'black' }