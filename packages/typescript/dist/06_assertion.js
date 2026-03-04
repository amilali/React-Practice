"use strict";
const raw = '{"id" : 1, "name": "A}';
const riskyUser = JSON.parse(raw);
console.log(riskyUser.name); // these above code is not going to be best practices.
function isUser(v) {
    return (typeof v === 'object' && v !== null && "id" in v &&
        typeof v.id === 'number' && 'name' in v &&
        typeof v.name === 'string');
}
const maybe = JSON.parse(raw);
if (isUser(maybe)) {
    console.log(maybe.name);
}
