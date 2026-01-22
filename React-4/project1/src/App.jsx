// App.jsx - Main entry point with routing setup
// Yeh file app ke sab routes define karti hai aur navigation handle karti hai.
import CardList from './components/CardList'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Headers from './components/Headers.jsx';
import DisplayCard from './components/DisplayCard.jsx';
import About from './components/About.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Headers>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about/Amil/Ali"> About</Link>
            <Link to="/contact"> Contact</Link>
          </nav>
        </Headers>
        <Routes>
          <Route path='/' element={<CardList />} />
          <Route path='/about/:userFname/:userLname' element={<About />} />
          <Route path='/contact' element={<h1>Contact</h1>} />

          <Route path='/card' element={<DisplayCard />}>
            <Route index element={<h1>hi</h1>} />
            <Route path='view' element={<h1>hi</h1>} />
          </Route>

          <Route path='*' element={<h1>Oops!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
