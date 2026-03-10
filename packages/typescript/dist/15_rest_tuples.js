"use strict";
// lets create rest operator in ts
function restValuefunction(...rest) {
    return rest.reduce((acc, curr) => acc += curr, 0);
}
console.log(restValuefunction(1, 2, 3, 4, 5));
// here it will take sepread value and restValuefunction is taking this value in rest operator
// in array form that's how rest operator it take secprated value into array of value.
// check this now, what if you pass
let x = [1, 2, 3, 4, 5];
console.log(restValuefunction(...x));
function makeRange(...args) {
    const [start, end, count = 1] = args;
    let returnValue = [];
    for (let i = start; i <= end; i++) {
        returnValue.push(i);
    }
    return returnValue;
}
console.log(makeRange(1, 10));
// imp
function returnSome(x, y) {
    return x + y;
}
const numberArr = [10, 10];
// returnSome(...numberArr); // --> here it will throw error as its value is not fixed we add can something more using .push()
// So, here you have to make it readonly
const numArr = [10, 10];
console.log(returnSome(...numArr)); // here now it become readonly.
