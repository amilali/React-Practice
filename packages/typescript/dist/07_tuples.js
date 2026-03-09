"use strict";
// tuple is a special type of array with a fixed number of elements
// where each element can have its own specific, predefined type.
// `as const` makes the array readonly and keeps the exact string values (literal types)
// without adding 'as const' typescript infer as string[] but after it take it as:
// readonly ['admin', 'user', 'operator']
const ROLES = ['admin', 'user', 'operator'];
// typeof ROLES: This extracts the type of the variable.
// [number]: why we add number as you see it is array of string means - "Give me the type of any element inside this array."
// it refer index of array
function setRole(r) {
    console.log(r);
}
setRole('operator'); // ✅ allowed because it is one of the values in ROLES
setRole('admin'); // ✅ allowed because it is one of the values in ROLES
setRole('user'); // ✅ allowed because it is one of the values in ROLES
// what is the error:
let arr11 = [1, 2, 1, 3, 1];
let newarr = new Array();
arr11.forEach((e, i) => {
    if (!newarr.includes(e)) {
        newarr.push(e);
    }
});
console.log(newarr);
