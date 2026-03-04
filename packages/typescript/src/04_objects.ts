
type User = {
    id: string, // required
    name : string,
    email?: string // optional
    readonly created: Date // canot be reassigned
}

let user1: User = {id: "3fwqefqewf", name: 'Amil', created: new Date(), email: 'amil@gmail.com'}
// order don't matter









// good counter part of 'any
const user:unknown = "1";
const newUer = (user as string); // we are using assertion
console.log(newUer.length);
