import Person ,{Amil} from './person'
import Button from './Button'
import Header from './Header';
import List from './List';
import Counter from './counter';
import './App.css';
import Dp from './Dp';


function App() {


  let obj = {
    src : 'https://res.cloudinary.com/djcmgdn0x/image/upload/v1688573174/samples/landscapes/architecture-signs.jpg',
    text: 'Sign Board'

}

  function Namealert(){
    const name = prompt("Enter your name");
    alert(`Hello! ${name}`);
  }  
  const Listitem = ["A"];
  return (
    <>

    <Dp src ="https://avatars.githubusercontent.com/u/66510886?s=400&u=e4e0503f0fd1f1632f748d2906c18873d505f37a&v=4" text="Amil Ali"/>

    <Header title="Hello React!" />

     <Person name="Amil Ali" age="23" />

     <Button text="Click Here" onClick={Namealert} />

     <List items={Listitem} />

     <Counter />

     <Amil>
    <h1>Passing Element as a children to props</h1>
    </Amil>


    <Dp  {...obj} />
    </>
  )
}

export default App;
