import React from 'react';
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(()=>{
    let timer;
    if(start){
    timer = setInterval(()=>{
      setCount((prev)=>prev+1)
    },1000);
    return ()=> clearTimeout(timer);
    }
  },[start])

  return (
    <>
      {count}
      <br/>
      <button onClick={()=>setStart(prev => !prev)}>{start ? 'Pause':'Start'}</button>
      {count >0 && <button onClick={()=>{setStart(prev => !prev); setCount(0)}}> Restart </button>}
    </>
  )
}

export default App
