"use strict";
// union is either this or that
const union = [1, 'a'];
// functions 
function test(u) {
    if (typeof u === "string") // you need to do type narrowing using typeof to use string methods
     {
        u.toUpperCase();
    }
}
function checkUser(user) {
    if (user.Role === "Admin") {
        console.log(user.Permission);
    }
    else {
        user.loyaltyPoints;
    }
}
// 'in' operator
function describeUserwithOperator(u) {
    if ('Permission' in u) { // we type narrowed it so tyscript think that this idf block is for Admin and else for Customer
        console.log(u.Role);
    }
    else {
        u.loyaltyPoints;
    }
}
// array of unions
const arrayofUnions = [1, '1'];
// unions of array
const unionsOfArray = Math.random() > 1 ? [1, 2, 3,] : ['a', 'b', 'c'];
