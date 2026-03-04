"use strict";
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
let username = 'Amil';
let age = 25;
let isEngineer = true;
const big = 2n ** 63n - 1n;
// Operator '+' cannot be applied to types 'bigint' and 'number'
// const mixed = big + age;
const TOKEN = Symbol('TOKEN');
// function
function yearsToDay(years) {
    return years * 365;
}
