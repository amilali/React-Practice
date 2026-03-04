"use strict";
function move(direction) {
    console.log(direction);
}
/*
CASE 1 — const
When we use const, the value cannot change later.
So TypeScript infers the MOST SPECIFIC type possible.

Instead of: string
it infers the literal type: "left"
*/
const d1 = 'left';
move(d1); // ✅ works because type of d1 is "left"
/*
CASE 2 — let
When we use let, the variable CAN be reassigned later.

Example:
let d2 = 'right'
d2 = 'hello'
d2 = 'banana'

Because of this possibility, TypeScript widens the type.

Instead of: "right"

it becomes: string
classic : TypeScript type inference vs reassignment safety issue

But move() only accepts:
'left' | 'right' | 'up' | 'down'

So TypeScript blocks it.
*/
// let d2 = 'right'
// move(d2) // ❌ Error: Argument of type 'string' is not assignable to type 'Directions'
/*
SOLUTION

Explicitly tell TypeScript that the variable must be one of the
allowed Direction values.

Now even if it is let, it can only be reassigned to:
'left', 'right', 'up', 'down'
*/
const d2 = 'right';
move(d2); // ✅ works
/*
MENTAL MODEL

const → narrow literal type
let → widened primitive type

Examples:

const x = "hello"  → type: "hello"
let x = "hello"    → type: string

const num = 10     → type: 10
let num = 10       → type: number
*/
/*
ALTERNATIVE SOLUTION (as const)

You can force literal type using "as const".
*/
let d3 = 'left'; // this is type assertions
move(d3); // ✅ works because d3 type becomes "left"
