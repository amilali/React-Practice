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

// Operator '+' cannot be applied to types 'bigint' and 'number'
// const mixed = big + age;


const TOKEN: unique symbol = Symbol('TOKEN');

// function

function yearsToDay(years: number):number{
    return years *365;
}

