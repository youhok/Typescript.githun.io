

// GENERICS


const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}


let docOne = addUID({ name: 'yoshi', age: 40 });

// let doctwo = addUID('hello')

console.log(docOne.age)

//with interfaces

interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: {
        name: 'shaun'
    }
}

const docfour: Resource<string[]> = {
    uid: 1,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'toilet roll']
}

console.log(docThree, docfour)