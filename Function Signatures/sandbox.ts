

//example 1

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

// example 2

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numtwo: number, action: string) => {
    if (action == 'add') {
        return numOne + numtwo;
    } else {
        return numOne - numtwo;
    }
}

// example 3

let logDetail: (obj: { name: string, age: number }) => void;


type person = { name: string, age: number };

logDetail = (hokiee: { name: string, age: number }) => {
    console.log(`${hokiee.name} is ${hokiee.age} years old`);
}