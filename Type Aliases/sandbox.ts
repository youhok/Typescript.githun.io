type StringOrNum = string | number;
type ObjwithName = { name: string, uid: StringOrNum };


const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: ObjwithName) => {
    console.log(`${user.name} says hello`);
}
const greetAgin = (user: ObjwithName) => {
    console.log(`${user.name} says hello`);
}