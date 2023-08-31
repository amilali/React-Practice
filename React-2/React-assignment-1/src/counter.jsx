import { useState } from 'react';


const Counter = () =>{

    const [ x, setx ] = useState(0);
    return(
        <>
        <h1>{x}</h1>
        <button onClick={()=>setx(x+1)}>+1</button>
        <button onClick={()=>setx(x-1)}>-1</button>
        </>
    );
}
export default Counter;