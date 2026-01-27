import React, {useState} from 'react'
import Greet from '../Greet'

const PureCompandMemo = () => {

    const [name, setName] = useState('');
    const [save, setSave] = useState(false);

  return (
    <React.Fragment>
    <span>Name : </span>
    <input onChange={(e)=>setName(e.target.value)} type="text" />
    <button onClick={()=>setSave(true)}>Save</button>
    <Greet Name={save && name}/>
    </React.Fragment>
  )
}

export default PureCompandMemo