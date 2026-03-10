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