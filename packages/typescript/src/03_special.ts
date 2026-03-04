// let title : string = 'intro';
// title = undefined;
// error 


// use unions

let title : string | undefined = 'intro';
title = undefined;


// void : function doesn't return a useful value
function log(msg:string):void{
    console.log(msg);
}

// never: when functions never returns
function fail(msg: string): never {
 throw new Error(msg)
}

// warning do not use "any" for callbacks, Try to ignore as much as possible.
// anything can break au runtime

const valueAny : any = JSON.parse('{"x" : 1}');

valueAny.notThere.toFixed(2) // it will break coz you used any and it will try to check in run time.

// for dafety apart from ts types you can add optional chaining operator
valueAny?.notThere?.toFixed(2)


