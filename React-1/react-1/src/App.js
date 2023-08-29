import logo from './logo.svg';
import './App.css';
import Mydp, { Hedd } from './Mydp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mydp />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome To Amil's PC
        </p>
        <a
          className="App-link"
          href="https://www.amilali.engineer"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.amilali.engineer
        </a>
        <Hedd />
      </header>
    </div>
  );
}

export default App;
