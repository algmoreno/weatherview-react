import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { WeatherContext } from '../../Contexts/WeatherContext';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const SearchBar = () => {

  const [[city, setCity], [data, setData],
  [error, setError], [isLoaded, setIsLoaded], 
  [items, setItems]] = useContext(WeatherContext);

  function getCity(val) {
    if (data === true) {
      setCity(val.target.value)
    }
  }
  
  console.log(city);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c3db145bc89912e27b13b4d5a94e0f9d`)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [city]);

  console.log(items)

  
  return (
    <Navbar className='search-main' expand="lg">
      <Container className='row justify-content-start search-container' fluid>
        <div className='col-9'>
        </div>
        <div className='col-3'>
          <Form className="d-flex"> 
            <FormControl
              onInput={(event) => {setCity(event.target.value)}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search" />
            <Button 
              onClick={() => setData(true)}
             variant="outline-success">Search</Button>
          </Form>
        </div>
      </Container>
    </Navbar>
  )
}

export default SearchBar;