import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { WeatherContext } from '../../Contexts/WeatherContext';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import sunny from '../../assets/images/sunny.jpg';

function Header2() {

  return (
    <Navbar className='header' fixed='top' variant="dark">
      <Container className='row justify-content-start search-container'>

        <div className='col-6'>
          <Navbar.Brand className='header-text' href="/">WeatherView</Navbar.Brand>
        </div>

        <div className='col-4'>

        </div>
        <div className='col-2'>
          <a href='/signin'>Sign In</a>
        </div>

      </Container>
    </Navbar>
  )
}

export default Header2;