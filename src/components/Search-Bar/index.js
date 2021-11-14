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
  [items, setItems], [details, setDetails]] = useContext(WeatherContext);

  
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c3db145bc89912e27b13b4d5a94e0f9d`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.cod === '200' || result.base === 'stations'){
            setItems(result);
            setData(true);
          }
          else if (result.cod === '400' || result.cod === '404' || result === []){
            setIsLoaded(false);
          }
        },
        (error) => {
          setError(error);
        }
      )
  }, [city],);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${items.coord.lat}&lon=${items.coord.lon}&appid=c3db145bc89912e27b13b4d5a94e0f9d`)
      .then(res => res.json())
      .then(
        (result) => {
          setDetails(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [data]);


  console.log(items);
  console.log(details);

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
              onClick={() => setIsLoaded(true)}
             variant="outline-success">Search</Button>
          </Form>
        </div>
      </Container>
    </Navbar>
  )
}

export default SearchBar;