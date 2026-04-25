// let title : string = 'intro';
// title = undefined;
// error 


// use unions
let title : string | undefined = 'intro';
title = undefined;


/* 
void : function doesn't return a useful value,
You use void when a function executes its code and then successfully finishes, 
but doesn't return a specific value. In JavaScript, 
such a function actually returns undefined under the hood, 
and TypeScript uses void to tell you to ignore that return value. 
*/
function log(msg:string):void{
    console.log(msg)
}

/* 
never: when functions never returns
You use never when a function never returns to its caller. 
This happens because the function either crashes (throws an error) 
or gets stuck in a loop that never ends. Because the end of the function is unreachable, 
it logically "never" has a return value.
*/
function fail(msg: string): never {
 throw new Error(msg)
}

/** @warning */
// do not use "any" for callbacks, Try to ignore as much as possible.
// anything can break at runtime
const valueAny : any = JSON.parse('{"x" : 1}');

valueAny.notThere.toFixed(2) // it will break in runtime coz you used 'any' and it will try to check in run time.
// better to use 'unknown'


// for safety apart from ts types you can add optional chaining operator
valueAny?.notThere?.toFixed(2)


