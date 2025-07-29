import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePrivy } from '@privy-io/react-auth';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);
  const { authenticated, login, logout, ready } = usePrivy();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/news', label: 'News' },
    { to: '/about', label: 'About Us' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Coinverse</Link>
      </div>
      <ul className="nav-links">
        {navLinks.map((link, idx) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={
                location.pathname === link.to
                  ? 'active'
                  : hovered === idx
                  ? 'hovered'
                  : ''
              }
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-auth">
        {ready && (
          authenticated ? (
            <button className="nav-btn" onClick={logout}>Logout</button>
          ) : (
            <button className="nav-btn" onClick={login}>Login/Sign Up</button>
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;