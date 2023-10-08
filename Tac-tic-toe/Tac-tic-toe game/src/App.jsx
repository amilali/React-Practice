import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Cards from '../Cards/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello</h1>
     <Cards player="X"/>
    </>
  )
}

export default App
