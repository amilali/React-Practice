# JavaScript Interview Prep: 30 Tricky Questions on `var`, `let`, and `const` (Scope & Hoisting)

This document contains a comprehensive list of 30 tricky JavaScript interview questions gathered from real-world tech interviews, focused on the differences, scope, and hoisting behaviors of `var`, `let`, and `const`, complete with outputs and explanations.

---

## 1. The Classic `setTimeout` Loop
**Question:** What is the output of the following code?
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1);
}
```
**Output:**
```text
3
3
3
0
1
2
```
**Explanation:** 
- `var` is function-scoped (or globally scoped here). The `setTimeout` callbacks all close over the *same* variable `i`. By the time the callbacks execute, the loop has finished and `i` is `3`.
- `let` is block-scoped. A new lexical environment is created for each iteration of the loop, so each `setTimeout` callback captures a distinct `j` variable.

---

## 2. Temporal Dead Zone (TDZ) Basics
**Question:** What will the following log?
```javascript
console.log(a);
console.log(b);
var a = 10;
let b = 20;
```
**Output:**
```text
undefined
ReferenceError: Cannot access 'b' before initialization
```
**Explanation:** 
- `var` is hoisted and initialized with `undefined`.
- `let` (and `const`) are hoisted but remain uninitialized in the "Temporal Dead Zone" (TDZ) until their actual declaration line is executed. 

---

## 3. Variable Shadowing
**Question:** What is the output of the following?
```javascript
var x = 100;
let y = 200;

function shadow() {
  var x = 10;
  let y = 20;
  console.log(x);
  console.log(y);
}
shadow();
console.log(x);
console.log(y);
```
**Output:**
```text
10
20
100
200
```
**Explanation:** 
Variables declared inside the function "shadow" the variables in the outer scope with the same names.

---

## 4. Illegal Shadowing
**Question:** Will this code run successfully?
```javascript
function illegalShadowing() {
  let a = 10;
  var a = 20; 
}
```
**Output:**
```text
SyntaxError: Identifier 'a' has already been declared
```
**Explanation:** 
You *cannot* shadow a block-scoped variable (`let` or `const`) with a function-scoped variable (`var`) within the same scope. Since `var` escapes the block, it clashes with the `let` declaration.

---

## 5. Re-declaration Restrictions
**Question:** What happens in each scenario?
```javascript
var a = 10;
var a = 20;
console.log(a);

let b = 10;
let b = 20;
console.log(b);
```
**Output:**
```text
20
SyntaxError: Identifier 'b' has already been declared
```
**Explanation:** 
`var` can be re-declared within the same scope without error. `let` and `const` cannot.

---

## 6. Global Object Properties
**Question:** What will be logged in a browser environment?
```javascript
var a = "Hello";
let b = "World";

console.log(window.a);
console.log(window.b);
```
**Output:**
```text
"Hello"
undefined
```
**Explanation:** 
At the top level (global scope), variables declared with `var` become properties of the global object (`window`). Variables declared with `let` and `const` do *not*.

---

## 7. Block Scope Leaks
**Question:** Can we access these variables outside the block?
```javascript
{
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a);
console.log(b);
```
**Output:**
```text
1
ReferenceError: b is not defined
```
**Explanation:** 
`var` ignores normal blocks (like `{}`). Therefore, `a` leaks out. `let` and `const` are strictly confined within the block.

---

## 8. TDZ inside a Nested Block
**Question:** What will be outputted?
```javascript
let name = "Alice";

function greet() {
  console.log(name);
  let name = "Bob";
}
greet();
```
**Output:**
```text
ReferenceError: Cannot access 'name' before initialization
```
**Explanation:** 
Inside the `greet` function, `let name = "Bob"` is hoisted to the top of the function block. `console.log(name)` tries to access this local `name` which is in the TDZ, not the outer `"Alice"`.

---

## 9. `const` Mutability
**Question:** Will this code throw an error?
```javascript
const person = { name: "John" };
person.name = "Doe";

const arr = [1, 2, 3];
arr.push(4);

person = { name: "Jane" }; // What about this?
```
**Output:**
```text
// person.name = "Doe" and arr.push(4) work perfectly fine.
TypeError: Assignment to constant variable. // Thrown on the last line
```
**Explanation:** 
`const` prevents *reassignment* of the identifier. It does *not* make the value immutable. You can freely mutate the properties of a `const` object or array.

---

## 10. Hoisting: Functions vs `var`
**Question:** What is the output?
```javascript
console.log(foo);
var foo = 1;
console.log(foo());

function foo() {
  return 2;
}
```
**Output:**
```text
[Function: foo]
TypeError: foo is not a function
```
**Explanation:** 
Function declarations take precedence over `var` declaration hoisting. First `foo` is the function, then it is reassigned to the number `1`.

---

## 11. Initializing `const`
**Question:** Is this valid?
```javascript
const a;
a = 10;
```
**Output:**
```text
SyntaxError: Missing initializer in const declaration
```
**Explanation:** 
`const` variables *must* be initialized at the exact time they are declared.

---

## 12. Switch Statement Scoping
**Question:** Will this code throw an error?
```javascript
let x = 1;
switch(x) {
  case 0:
    let result = "Zero";
    break;
  case 1:
    let result = "One"; 
    break;
}
```
**Output:**
```text
SyntaxError: Identifier 'result' has already been declared
```
**Explanation:** 
A `switch` statement creates a *single* block scope for all of its cases. Both instances of `let result` end up in the exact same scope.

---

## 13. Function Expression Hoisting
**Question:** What will this log?
```javascript
console.log(myFunc);
console.log(myFunc());

var myFunc = function() {
  return "Hello";
};
```
**Output:**
```text
undefined
TypeError: myFunc is not a function
```
**Explanation:** 
Only the variable declaration (`var myFunc`) is hoisted, not the initialization (`= function() {...}`). So `myFunc` is `undefined` when called, which throws a TypeError.

---

## 14. `typeof` Operator and TDZ
**Question:** What output does this produce?
```javascript
console.log(typeof undeclaredVariable);
console.log(typeof letVariable);
let letVariable = "Hello";
```
**Output:**
```text
"undefined"
ReferenceError: Cannot access 'letVariable' before initialization
```
**Explanation:** 
`typeof` is perfectly safe to use on completely undeclared variables (returns `"undefined"`). However, using it on variables currently in the TDZ will throw a `ReferenceError`.

---

## 15. Catch Block Scoping
**Question:** How does scoping work in `catch` blocks?
```javascript
try {
  throw new Error("Oops");
} catch (e) {
  var x = 1;
  let y = 2;
  console.log(e); // Error: Oops
}

console.log(x);
console.log(y);
console.log(e);
```
**Output:**
```text
1
ReferenceError: y is not defined
// (If you fix y, the next line is: ReferenceError: e is not defined)
```
**Explanation:** 
The parameter `e` in a standard `catch(e)` acts identically to `let` (it's block-scoped). `var x = 1` ignores block scope and leaks out. `let y = 2` is block-scoped inside the catch block.

---

## 16. Implicit Globals
**Question:** What happens if you forget `var`/`let`/`const`? (Assume non-strict mode)
```javascript
function createVariable() {
  x = 10;
}
createVariable();
console.log(x);
```
**Output:**
```text
10
```
**Explanation:** 
In non-strict mode, assigning to an undeclared variable creates an implicit global variable (`window.x`). In strict mode (`"use strict";`), this throws a `ReferenceError`.

---

## 17. Shadowing Function Arguments
**Question:** What is the output?
```javascript
function test(a) {
  var a = 10;
  let b = 20;
  console.log(a);
}
test(5);

function test2(a) {
  let a = 10;
  console.log(a);
}
test2(5);
```
**Output:**
```text
10
SyntaxError: Identifier 'a' has already been declared (in test2)
```
**Explanation:** 
You can re-declare arguments using `var` inside the function, and it simply updates the value. However, you cannot declare a `let` variable with the same name as a function argument, because arguments are already bound in that scope.

---

## 18. Default Parameters and TDZ
**Question:** What does this output?
```javascript
function foo(a = b, b = 2) {
  return a + b;
}
console.log(foo());
```
**Output:**
```text
ReferenceError: Cannot access 'b' before initialization
```
**Explanation:** 
Default parameters act like `let` declarations evaluated from left to right. When examining `a = b`, the parameter `b` has not been initialized yet (it is in the TDZ). 

---

## 19. Repeated Loop Variables with `var`
**Question:** What does this code do?
```javascript
var i = 10;
for (var i = 0; i < 3; i++) {
  // do nothing
}
console.log(i);
```
**Output:**
```text
3
```
**Explanation:** 
Because `var` is function-scoped (or global here) and can be re-declared, the loop simply reuses the existing global `i`, modifying it until it hits `3`.

---

## 20. Repeating Loop Variables with `let`
**Question:** Contrast this with `let`:
```javascript
let i = 10;
for (let i = 0; i < 3; i++) {
  // do nothing
}
console.log(i);
```
**Output:**
```text
10
```
**Explanation:** 
The `let i = 0` inside the `for` loop parameters creates a new lexical scope specifically for the loop, completely separate from the outer `let i = 10`.

---

## 21. `Object.freeze()` vs `const`
**Question:** How does `Object.freeze` differ from `const`?
```javascript
const obj = Object.freeze({ prop: 1 });
obj.prop = 2;
console.log(obj.prop);
```
**Output:**
```text
1
```
**Explanation:** 
`const` applies to the variable *binding*. `Object.freeze()` applies to the *object itself*, making its properties un-modifiable (shallowly). In `strict` mode, `obj.prop = 2` would actually throw a TypeError. In non-strict mode, it fails silently.

---

## 22. IIFEs and Scope Protection
**Question:** What does `x` evaluate to here?
```javascript
(function() {
  var x = y = 100;
})();
console.log(typeof x);
console.log(typeof y);
```
**Output:**
```text
"undefined"
"number"
```
**Explanation:** 
`var x = y = 100` evaluates from right to left as `y = 100` and then `var x = y`. `y` has no variable declaration, so it becomes an implicit global. `var x` remains function-scoped inside the IIFE and doesn't leak out.

---

## 23. Function Declaration in Blocks
**Question:** Is this valid JS, and what logs? (In strict mode)
```javascript
"use strict";
{
  function doSomething() {
    return "Hello";
  }
}
console.log(doSomething());
```
**Output:**
```text
ReferenceError: doSomething is not defined
```
**Explanation:** 
In modern JavaScript (strict mode), function declarations inside of blocks are block-scoped, exactly like `let`. They cannot be accessed outside the block. (In non-strict mode, behavior is highly inconsistent across browsers, though historically it leaked out like `var`).

---

## 24. Lexical Scoping and `this`
**Question:** What does this log?
```javascript
const obj = {
  name: "JS",
  arrowFunc: () => console.log(this.name),
  regFunc: function() { console.log(this.name); }
};

var name = "Global JS";

obj.arrowFunc();
obj.regFunc();
```
**Output:**
```text
"Global JS"
"JS"
```
**Explanation:** 
Arrow functions do not have their own `this` binding; they inherit the `this` from the enclosing lexical context. Here, that's the global window object. Because `var name` declares a variable on the global object, `this.name` inside the arrow function resolves to "Global JS". The regular function binds `this` to the `obj` calling it.

---

## 25. Hoisting across multiple script tags (HTML)
**Question:** If script 1 has `let a = 1;` and script 2 relies on it, what happens?
**Output:**
Variables declared with `var`, `let`, or `const` at the top level of any script block are shared across the global environment in browsers. Thus, script 2 can access `a`. If script 1 had used `let a = 1`, script 2 calling `console.log(a)` will print `1`.

---

## 26. Multiple TDZs in same line
**Question:** What happens?
```javascript
let a = 1, b = a + 2, c = b + 3;
console.log(c);
```
**Output:**
```text
6
```
**Explanation:** 
Comma-separated declarations are evaluated sequentially from left to right. Once `a` is initialized, it leaves the TDZ, allowing `b` to safely use it, and so on.

---

## 27. Same line TDZ Error
**Question:** Conversely, what about this?
```javascript
let a = b + 1, b = 2;
console.log(a);
```
**Output:**
```text
ReferenceError: Cannot access 'b' before initialization
```
**Explanation:** 
Evaluating sequentially, `a` tries to access `b`. However, `b` remains in the TDZ until the engine evaluates `b = 2`.

---

## 28. `var` inside an Arrow Function
**Question:** Does `var` leak out of an arrow function?
```javascript
const myArrow = () => {
  var hidden = true;
};
myArrow();
console.log(hidden);
```
**Output:**
```text
ReferenceError: hidden is not defined
```
**Explanation:** 
Arrow functions are still functions! `var` is function-scoped. It will not leak out of an arrow function.

---

## 29. Hoisting of Classes
**Question:** Are ES6 classes hoisted like functions?
```javascript
const myInstance = new Car();

class Car {
  constructor() {
    this.wheels = 4;
  }
}
```
**Output:**
```text
ReferenceError: Cannot access 'Car' before initialization
```
**Explanation:** 
Classes are hoisted under the hood exactly like `let` and `const`. They are placed in the Temporal Dead Zone until their definition is evaluated, so you cannot instantiate them before they are declared in the code.

---

## 30. Variable Declarations in `for...in` Loops
**Question:** What does this log?
```javascript
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key);
}

for (const key in obj) {
  setTimeout(() => console.log(key), 10);
}
```
**Output:**
```text
"a", "b", "c"
"a", "b", "c" (after 10ms)
```
**Explanation:** 
You can use `const` inside a `for...in` or `for...of` loop because a *new* block scope (and a new `const` binding) is created for every single iteration. However, using `const` inside a standard `for (const i = 0; i < 3; i++)` will crash on the second loop, because `i++` attempts to mutate a constant!

---

## 31. The `eval()` Scope Leak
**Question:** How does `var` behave inside `eval()` compared to `let`?
```javascript
eval("var e1 = 1; let e2 = 2;");
console.log(e1);
console.log(e2);
```
**Output:**
```text
1
ReferenceError: e2 is not defined
```
**Explanation:** 
Code executed via non-strict `eval()` runs with the caller's privilege. `var` leaks out of `eval` into the surrounding scope. However, `let` and `const` inside an `eval` create their own separate lexical scope.

---

## 32. Temporal Dead Zone with `typeof`
**Question:** Will this throw an error?
```javascript
console.log(typeof x);
let x = 10;
```
**Output:**
```text
ReferenceError: Cannot access 'x' before initialization
```
**Explanation:** 
Before ES6, `typeof` was always safe to use (returning `"undefined"` for undeclared items). But using `typeof` on a variable explicitly declared with `let` or `const` that is currently in the TDZ throws a ReferenceError.

---

## 33. The `new Function()` Scope
**Question:** Where does `new Function()` bind its closures?
```javascript
var num = 10;
function createFunc() {
  var num = 20;
  return new Function('return num;');
}
console.log(createFunc()());
```
**Output:**
```text
10
```
**Explanation:** 
Unlike regular functions that inherit closures from where they are defined, functions created via the `new Function()` constructor always bind their closures to the global scope. Here, it sees `var num = 10` (the global `num`), totally ignoring the inner `num = 20`.

---

## 34. Global Object and Global Declarations
**Question:** Will `delete` work on this variable?
```javascript
var myVar = 5;
console.log(delete window.myVar);
console.log(myVar);
```
**Output:**
```text
false
5
```
**Explanation:** 
When `var` is used to create a global variable, it attaches to the global object with its `configurable` flag set to `false`. Therefore, it cannot be deleted using the `delete` operator. 

---

## 35. Class Hoisting and Expressions
**Question:** How do class expressions compare to class declarations?
```javascript
let myCar = new Car();
let Car = class { };
```
**Output:**
```text
ReferenceError: Cannot access 'Car' before initialization
```
**Explanation:** 
Neither class declarations nor class expressions are initialized until evaluation. Both are kept in the TDZ.

---

## 36. Shadowing Function Names
**Question:** What does this output?
```javascript
var test = 10;
function test() {
  console.log("Hello");
}
console.log(typeof test);
```
**Output:**
```text
"number"
```
**Explanation:** 
Function declarations are hoisted before variable declarations. First, `test` becomes a function. Then, the variable assignment `test = 10` overwrites it. 

---

## 37. Immediate TDZ inside Blocks
**Question:** Will this log `10` or an error?
```javascript
let w = 10;
{
  console.log(w); 
  let w = 20;
}
```
**Output:**
```text
ReferenceError: Cannot access 'w' before initialization
```
**Explanation:** 
The inner block has its own lexical environment. The inner `let w` is hoisted to the top of the block, eclipsing the outer `w`. Because it is in the TDZ, calling `console.log(w)` throws an error.

---

## 38. Destructuring and the TDZ
**Question:** Does the TDZ apply inside array destructuring?
```javascript
let [a = b, b = 2] = [];
console.log(a, b);
```
**Output:**
```text
ReferenceError: Cannot access 'b' before initialization
```
**Explanation:** 
Destructuring assignments are evaluated sequentially from left to right. When checking `a = b`, the `b` parameter is uninitialized and lives in the TDZ.

---

## 39. Blocks with `var`
**Question:** Does `var` leak out of nested conditional blocks?
```javascript
if (true) {
  var leak = true;
}
console.log(leak);
```
**Output:**
```text
true
```
**Explanation:** 
Yes. `var` does not respect block scoping (`if`, `for`, `while`), only function scoping. 

---

## 40. Labelled Blocks
**Question:** Can `let` escape a labelled block?
```javascript
myLabel: {
  let inner = 5;
  break myLabel;
}
console.log(inner);
```
**Output:**
```text
ReferenceError: inner is not defined
```
**Explanation:** 
Labelled blocks are still blocks (`{...}`). `let` and `const` variables declared inside them will never leak out.

---

## 41. Scope with `with()` statement
**Question:** Does `let` work appropriately inside `with`?
*(Assume non-strict mode as `with` is forbidden in strict mode)*
```javascript
var obj = { a: 1 };
with (obj) {
  let a = 2;
  var b = 3;
}
console.log(obj.a);
console.log(b);
```
**Output:**
```text
1
3
```
**Explanation:** 
The `with` statement creates a temporary scope using the object's properties. `let a = 2` creates a block-scoped variable that *does not* overwrite `obj.a`. `var b = 3` escapes the `with` block entirely. 

---

## 42. Closure Bugs Fixed by IIFEs
**Question:** Before `let`, how did developers fix the loop logging bug?
```javascript
for (var i = 0; i < 3; i++) {
  (function(lockedIndex) {
    setTimeout(() => console.log(lockedIndex), 1);
  })(i);
}
```
**Output:**
```text
0
1
2
```
**Explanation:** 
By wrapping the code in an IIFE (Immediately Invoked Function Expression) and passing `i` as an argument, they created a *new function scope* for each iteration, breaking the closure reference to the single global `i`. This is exactly what `let` does for block scopes.

---

## 43. Calling `const` before `setTimeout`
**Question:** Does the TDZ matter if the reference happens asynchronously?
```javascript
function delay() {
  console.log(x);
}
setTimeout(delay, 100);
const x = 50;
```
**Output:**
```text
50
```
**Explanation:** 
This succeeds! The `setTimeout` delays execution for 100ms. By the time `delay()` is evaluated, the `const x = 50` line has already executed, freeing `x` from the TDZ.

---

## 44. Arrow Function Closure Context
**Question:** What does this Output?
```javascript
var myVar = 1;
function outer() {
  var myVar = 2;
  return () => console.log(myVar);
}
outer()();
```
**Output:**
```text
2
```
**Explanation:** 
The arrow function closes over the lexical environment of `outer()`, exactly where it was defined. Therefore, it remembers the `myVar` that was equal to `2`.

---

## 45. Nested Functions and Shadowing
**Question:** Does nested function execution change variable finding?
```javascript
var val = 1;
function execute() {
  console.log(val);
  var val = 2;
}
execute();
```
**Output:**
```text
undefined
```
**Explanation:** 
Inside `execute`, `var val` is hoisted to the top. This local `val` completely shadows the outer `val = 1`. Since it's hoisted but unassigned, it is `undefined`.

---

## 46. Modifying global `let`
**Question:** Does modifying the `window` object change a `let` variable?
```javascript
let myApp = "App1";
window.myApp = "App2";
console.log(myApp);
```
**Output:**
```text
"App1"
```
**Explanation:** 
Because `let` declarations do not attach to the global object, `myApp` and `window.myApp` are completely distinct references in global scope. Modifying the window property does not touch the lexical `let` variable.

---

## 47. Re-assignment with Loop Conditions
**Question:** Can `const` be used for `while` loops?
```javascript
let count = 0;
while (const c = count < 2) { // Is this allowed?
  console.log(c);
  count++;
}
```
**Output:**
```text
SyntaxError: Unexpected token 'const'
```
**Explanation:** 
You cannot formulate declarations directly inside a `while()` conditional expression standard syntax in JavaScript. Only evaluations can go in the condition parentheses.

---

## 48. Reassigning `arguments`
**Question:** Is the `arguments` object mutable?
```javascript
function mut(a, b) {
  arguments[0] = 99;
  console.log(a);
}
mut(1, 2);
```
**Output:**
```text
99
```
**Explanation:** 
In non-strict mode, reassigning `arguments[0]` actively mirrors and edits the bound function parameter `a`. (In strict mode, they are completely decoupled and `a` would remain 1). 

---

## 49. Shadowing Catch Clause
**Question:** Are you allowed to recreate the `catch` argument?
```javascript
try { throw "Bug" }
catch(err) {
  let err = "New Bug"; 
  console.log(err);
}
```
**Output:**
```text
SyntaxError: Identifier 'err' has already been declared
```
**Explanation:** 
The `catch(err)` creates a block-scoped binding for `err`. Redeclaring it using `let` in the identical block is strictly forbidden. 

---

## 50. Exporting hoisted functions
**Question:** Can a module export a function defined lower down the file?
```javascript
export { showData };
function showData() { return "Data"; }
```
**Output:**
```text
// Valid!
```
**Explanation:** 
Function declarations are reliably hoisted to the top of module scope. Modules can smoothly export these hoisted bindings before their visual placement in the file.
