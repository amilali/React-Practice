"use strict";
const xss = [1, 2, 3];
const yss = [1, 2, 3];
// or
// const yss: ReadonlyArray<number> = [1,2,3];
// yss.push(1)  --> not allowed as this is readonly
function mail(n) {
    let c = 0;
    for (let i of n)
        c = +i;
    return c;
}
mail(xss);
