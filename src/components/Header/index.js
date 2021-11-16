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

function Header() {

  const [[city, setCity], [data, setData],
    [error, setError], [isLoaded, setIsLoaded],
    [items, setItems]] = useContext(WeatherContext);


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


  console.log(items);
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
              variant="outline-success">Search</Button>
          </Form>
          </div>
          <div className='col-2'>
            <a href='/signin'>Sign In</a>
          </div>
      </Container>
    </Navbar>
  )
}

export default Header;