//  inference examples
const number = (n:number) => n*2;
// here you dont need to give return as you already set the input value,
// So due to type inference it will by default add the type inferences.

// when you should add explicit return types?
// when your function is Exported or public functions
export function number1(n:number): number {return n*2;}

// boolean to number

function booleanTonumber(n:boolean):number{
    if(n){
        return 0
    }
    else{
        return 2
    }
}
// A boolean can only be true or false.
// If you only had the if(n) block, and the input was false,
// the function would return undefined.


async function loadCountInfered(){
    return 1;
}

loadCountInfered().then((n)=> console.log(n));
// if you hover it you will see it is returing Promise<number>


// let p1 = new Promise((resolve)=>resolve('hi'));
// p1.then((response)=>console.log(response))


// let p2 = Promise.resolve('hi');
// p2.then((response)=>console.log(response));