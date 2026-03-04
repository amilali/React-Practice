"use strict";
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
