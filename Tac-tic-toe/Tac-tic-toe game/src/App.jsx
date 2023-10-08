import { useState } from 'react'
import Cards from '../Cards/Cards'
import './App.css'
import Grid from '../Cards/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grid numberOfGrid={9} />
    </>
  )
}

export default App;
