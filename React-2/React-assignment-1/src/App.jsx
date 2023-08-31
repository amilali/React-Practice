import Person from './person'
import Button from './Button'
import Header from './Header';
import List from './List';
import Counter from './counter';
import './App.css'

function App() {
  function Namealert(){
    const name = prompt("Enter your name");
    alert(`Hello! ${name}`);
  }
  const Listitem = ["A"];
  return (
    <>
    <Header title="Hello React!" />
     <Person name="Amil Ali" age="23" />
     <Button text="Click Here" onClick={Namealert} />
     <List items={Listitem} />
     <Counter />
    </>
  )
}

export default App
