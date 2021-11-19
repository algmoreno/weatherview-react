import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { WeatherContext } from '../../Contexts/WeatherContext';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { BiUserCircle } from 'react-icons/bi';
import sunny from '../../assets/images/sunny.jpg';

const Header = () => {

  const [[city, setCity],
    [error, setError], [isLoaded, setIsLoaded], [style, setStyle],
    [items, setItems], [temp, setTemp]] = useContext(WeatherContext);


  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c3db145bc89912e27b13b4d5a94e0f9d`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.cod === '200' || result.base === 'stations') {
            setItems(result);
          }
          else if (result.cod === '400' || result.cod === '404' || result === []) {
            setIsLoaded(false);
          }
        },
        (error) => {
          setError(error);
        }
      )
  }, [city]);

  if (isLoaded){
    setTemp(items.main.temp)
    setStyle(items.weather[0].main);
  };
  
  console.log(items)

  console.log(isLoaded);

  return (
    <Navbar className='header' fixed='top' variant="dark">
      <Container className='row justify-content-start search-container'>

        <div className='col-6'>
          <Navbar.Brand className='header-text' href="/">WeatherView</Navbar.Brand>
        </div>

        <div className='col-4'>
          <Form className="d-flex search-opt">
            <FormControl
              onInput={(event) => { setCity(event.target.value) }}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search" />
            <Button
              className='search-btn'
              onClick={() => setIsLoaded(true)}
              variant="light">Search</Button>
          </Form>
        </div>
        <div className='col-2'>
          <NavDropdown className='user-dropdown' title= {<BiUserCircle className='user-icon' />} id="navbarScrollingDropdown">
            <NavDropdown.Item href="/signin">Sign In</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/signup">Create Account</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header;