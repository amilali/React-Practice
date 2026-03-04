// typescript knows javascript
// ts write types under the hood when you write
let count = 0; // ts sees number and assign :number type
const site = "google"; // same here it assign :string type
const arr = [1, 2, 3];
// over annottation isn't bad its just noisy
// youc cna use ts like in functions
export function add(a, b) {
    return a + b;
}
console.log(add(5, 2));
// you should also annotate when the type is not obvious 
let maybe;
maybe = Math.random() > 0.5 ? "test" : 10;
