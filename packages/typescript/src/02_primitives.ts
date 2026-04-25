// string , number , boolean, bigint, symbol, null, undefine.

/*
    let isDone: boolean = false;
    let lines: number = 42;
    let name: string = "TypeScript";
    let notDefined: undefined = undefined;
    let notPresent: null = null;
    let uniqueKey: symbol = Symbol("key");
    let bigNum: bigint = 100n;
*/


let username : string = 'Amil';
let age:number = 25;
let isEngineer:boolean = true;


const big :bigint = 2n **63n -1n;
// n is a suffix to denote a bigint value 1n === Bigint(1)
// Operator '+' cannot be applied to types 'bigint' and 'number'
// means you can't add number + Bigint
// const mixed = big + age;
// useCase
// When numbers go beyond safe integer limit
// Max value of integer = 2^53 - 1


// Symbol
// A symbol is a unique and immutable primitive value.
// Even if two symbols look the same, they are always different.
const a = Symbol("uniqueId");
const b = Symbol("id");
// console.log(a === b); // false ❗

const TOKEN: unique symbol = Symbol('TOKEN');
// application of symbol
// Avoid object key collisions
const id = Symbol("id");

const user33 = {
  name: "Amil",
  [id]: 123
};
// 👉 No other id can overwrite this
// 🔥 Key behavior
// Not included in normal loops:
for (let key in user33) {
  console.log(key); // won't show symbol keys
}
// But accessible directly:
console.log(Object.getOwnPropertySymbols(user33));

// javaScript fully supports Symbol ✅ and it was introduce in ES6/ES2015


// Function
function yearsToDay(years: number):number{
    return years *365;
}

export {}  