import logo from './logo.svg';
import './App.css';
import Mydp, { Hedd } from './Mydp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mydp link="https://raw.githubusercontent.com/amilali/CrowdXfund/main/img/circular%20dp.png" />
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
        <Hedd name="Amil Ali" />
      </header>
    </div>
  );
}

export default App;
