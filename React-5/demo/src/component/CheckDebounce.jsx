import React from 'react'
import { debounce } from '../polyfills/debounce'


function logValue(e){
    console.log(e.target.value)
}

const CheckDebounce = () => {
  return (
    <>
    <div>CheckDebounce</div>
    {/* <input type="text" onChange={(e)=>debounce(logValue,1000)(e)} /> */}
    <input type="text" onChange={debounce(logValue,1000)} />
    </>
  )
}

export default CheckDebounce