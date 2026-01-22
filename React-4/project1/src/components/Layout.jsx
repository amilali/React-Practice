import React from 'react'
import Headers from './Headers'
import CardList from './CardList'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Headers>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact</Link>
          </nav>
    </Headers>
    <CardList/>
    <Outlet />
    </>
  )
}

export default Layout