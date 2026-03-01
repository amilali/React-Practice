import { useState } from 'react';
const Counter = () =>{

    let [ x, setx ] = useState(0);
    return(
        <>
        <h1>{x} is {(x%2==0) ? 'Even' : 'odd'}  </h1>
        <button onClick={()=>setx(x+1)}>+1</button>
        <button onClick={()=>setx(x-1)}>-1</button>
        <button onClick={()=>setx(x=0)}>Reset</button>
        </>
    );
}
export default Counter;