// lets create rest operator in ts
function restValuefunction(...rest: number[]):number{
    return rest.reduce((acc, curr)=>acc +=curr,0);
}

console.log(restValuefunction(1,2,3,4,5));
// here it will take sepread value and restValuefunction is taking this value in rest operator
// in array form that's how rest operator it take secprated value into array of value.


// check this now, what if you pass
let x = [1,2,3,4,5];
console.log(restValuefunction(...x));
// output will be same coz here, i did spread operator,
// mental model
// rest operator => take seprated argument/value's and convert them into array of value.
// spread operator => it converts array of value into seprated value/argument's.
type numberTouple = [start: number, end:number, count?: string | undefined];
function makeRange(...args: numberTouple){
   const [start, end, count=1] = args;
   let returnValue = [];
   for(let i = start; i<=end; i++) {
    returnValue.push(i);
   }
   return returnValue;
}

console.log(makeRange(1,10));



// imp
function returnSome(x: number, y:number):number{
    return x+y;
}

const numberArr = [10,10];
// returnSome(...numberArr); // --> here it will throw error as its value is not fixed we add can something more using .push()
// So, here you have to make it readonly

const numArr = [10,10] as const;
console.log(returnSome(...numArr)); // here now it become readonly.