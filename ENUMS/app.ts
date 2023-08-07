
// ENUMS
//like Array
enum ResourceType { BOOK, AUTHER, FILM, DIRECTOR, PERSON };


interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}


const docone: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
}

const docTwo: Resource<object> = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi' }
}

