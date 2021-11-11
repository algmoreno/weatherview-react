import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const SearchBar = () => {

  const [city, setCity] = useState('');
  const [data, setData] = useState(false);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  function getCity(val) {
    if (data === true) {
      setCity(val.target.value)
    }
  }
  
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=tucson&appid=c3db145bc89912e27b13b4d5a94e0f9d`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  console.log(items)

  
  return (
    <Navbar className='search-main' expand="lg">
      <Container className='row justify-content-start search-container' fluid>
        <div className='col-9'>
        </div>
        <div className='col-3'>
          <Form className="d-flex"> 
            <FormControl
              onChange={getCity}
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