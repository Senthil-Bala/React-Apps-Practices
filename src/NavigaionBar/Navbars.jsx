import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes,Route,Link} from "react-router-dom";
import Home from './Home';
import Services from './Services';
import About from './About';
import Feedback from './Feedback';
import "./Nav.css"
function Navbars() {
  return (
    <div >
        <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" variant="tabs" defaultActiveKey="/home">
      <Container>
        <Navbar.Brand to="/home">Company Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto leftEnd-items" >
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </Nav>
          <Nav className='rightEnd-items'>
            <Link to="/services">Services</Link>
            <Link  to="/feedback">
              <button>Feedback</button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/feedback' element={<Feedback />} />
    </Routes>
    </div>
  )
}

export default Navbars