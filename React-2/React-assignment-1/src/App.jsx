import Person from './person'
import Button from './Button'
import Header from './Header';
import List from './List';
import Counter from './counter';
import './App.css'
import Dp from './Dp'

function App() {
  function Namealert(){
    const name = prompt("Enter your name");
    alert(`Hello! ${name}`);
  }
  const Listitem = ["A"];
  return (
    <>
    <Dp src ="https://res.cloudinary.com/djcmgdn0x/image/upload/v1693487515/PicsArt_01-07-09.50.15_copjsa.jpg" text="Amil"/>

    <Dp src="https://res.cloudinary.com/djcmgdn0x/image/upload/v1688573198/cld-sample-5.jpg"
    text="Shoes"
    />

    <Header title="Hello React!" />
     <Person name="Amil Ali" age="23" />
     <Button text="Click Here" onClick={Namealert} />
     <List items={Listitem} />
     <Counter />
    </>
  )
}

export default App
