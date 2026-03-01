import { useState } from 'react'
import './App.css'
import Img from './Img'
import Head from './Head'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="main">
    <Img src="https://res.cloudinary.com/djcmgdn0x/image/upload/v1693487515/PicsArt_01-07-09.50.15_copjsa.jpg"  />
   <Head />
    </div>
    </>
  )
}

export default App
