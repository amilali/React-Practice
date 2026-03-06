
type User = {
    id: string, // required
    name: string,
    email?: string // optional
    readonly created: Date // canot be reassigned
}

let user1: User = { id: "3fwqefqewf", name: 'Amil', created: new Date(), email: 'amil@gmail.com' }
// order don't matter


// Objects
type Count = { [k: string]: number };
type Count1 = Record<"likes" | "view" | "shares", number>

const c1: Count = { "Amil": 1 }
const c2: Count1 = { likes: 1, view: 2, shares: 3 }

//unknown is good counter part of 'any'
const user: unknown = "1";
const newUer = (user as string); // we are using 'assertion' here
console.log(newUer.length);

////////////////////////
type test = {
    name: string,
    age:number
}

// or

type test1 = {
    [name: string] : string | number
}


const obj : test1 = {
    name: "AMil",
    age: 65
}