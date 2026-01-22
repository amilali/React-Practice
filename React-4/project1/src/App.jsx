// App.jsx - Main entry point with routing setup
// Yeh file app ke sab routes define karti hai aur navigation handle karti hai.
import CardList from './components/CardList'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Headers from './components/Headers.jsx';
import DisplayCard from './components/DisplayCard.jsx';
import About from './components/About.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Headers>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about/Amil/Ali" style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
            > About</NavLink>
            <NavLink to="/contact"> Contact</NavLink>
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
