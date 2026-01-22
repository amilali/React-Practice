// DisplayCard.jsx - Card details display component
// Yeh component selected card ki details dikhata hai aur nested view ke liye link provide karta hai.
import React, { useEffect } from 'react'
import { useLocation, useNavigate, Outlet, Link } from 'react-router-dom';

const DisplayCard = () => {
  const location = useLocation();
  const { state, pathname } = location;
  const navigate = useNavigate();
  useEffect(() => {
    // Redirect only if required state is missing and we are on the main card page
    if (!state?.title || !state?.url) {
      if (pathname === '/' || pathname === '/card') {
        navigate('/', { replace: true });
      }
    }
  }, [state, navigate, pathname]);

  return (
    <div>
      <img src={state.url} alt={state.title} srcset="" />
      <h2>{state.title}</h2>
      <Link to='view' state={state}>view</Link>
      <Outlet />
    </div>
  )
}

export default DisplayCard