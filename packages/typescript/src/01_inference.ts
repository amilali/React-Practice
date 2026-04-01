// typescript knows javascript
// ts write types under the hood when you write

let count = 0; // ts sees number and assign :number type

const site = "google"; // same here it assign :string type
const arr = [1,2,3];
// over annottation isn't bad its just noisy
// youc cna use ts like in functions

export function add(a: number, b:number){
    return a+b;
}
console.log(add(5,2));
// you should also annotate when the type is not obvious 

let maybe : string | number;

maybe = Math.random() > 0.5 ? "test" : 10;


// ---------- another one ------------ //

interface USer {
    id: number,
    name: string
}

const user007 : USer[] = [
{
    id: 1,
    name: 'Amil'
},
{
    id: 2,
    name: 'Ram'
}
]

const convertToUpperCase = (id: number): string => {
    const userName = user007.find((e)=>e.id === id);
    return userName?.name.toUpperCase() ?? "Not found";
}


console.log(convertToUpperCase(2));



