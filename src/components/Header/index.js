import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import sunny from '../../assets/images/sunny.jpg';

function Header() {
  return(
    <Navbar className='header'>
  <Container>
    <Navbar.Brand className='header-text' href="#home">WeatherView</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header; 