import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Blogpost from '../pages/Blogpost';
import Gallery from '../pages/Gallery';
import Calendar from '../pages/Calendar';
import Admin from '../pages/Admin';

const NavbarRouter = () => {
  // Use 255 instead of 256 for valid RGB, but keep your original structure
  const [navColor, setNavColor] = useState([255, 255, 255]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollVal = window.scrollY / window.innerWidth;
      const aboutPageVal = (Math.round(scrollVal * 100) - 50) * 5;

      if (aboutPageVal > -100 && aboutPageVal < 50) {
        const lerpLength = 100 - -50; // 150
        const progress = aboutPageVal + 100; // -100 -> 0, 50 -> 150
        const proportion = progress / lerpLength;

        const base = 255;
        const rTarget = 205;
        const gTarget = 92;
        const bTarget = 92;

        const r = base - proportion * (base - rTarget);
        const g = base - proportion * (base - gTarget);
        const b = base - proportion * (base - bTarget);

        setNavColor([r, g, b]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const resetNav = () => {
    setNavColor([255, 255, 255]);
  };

  const [r, g, b] = navColor;
  const linkStyle = { color: `rgb(${r}, ${g}, ${b})`, marginLeft: '1rem' };

  return (
    <Router>
      <Navbar className="navbar-top-right" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link style={linkStyle} to="/" onClick={resetNav}>
              Home
            </Link>

            <Link style={linkStyle} to="/Blog" onClick={resetNav}>
              Blog
            </Link>

            <Link style={linkStyle} to="/Gallery" onClick={resetNav}>
              Gallery
            </Link>

            <Link style={linkStyle} to="/Calendar" onClick={resetNav}>
              Calendar
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/Blog" element={<Blog />} />
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/blogpost/:blogObj" element={<Blogpost />} />
      </Routes>
    </Router>
  );
};

export default NavbarRouter;
