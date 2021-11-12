import React, { useContext } from 'react';
import { WeatherContext } from '../../Contexts/WeatherContext';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import SearchBar from '../Search-Bar';
import toFahrenheit from '../../utils/helpers';

function Display() {

  const [[city, setCity], [data, setData],
  [error, setError], [isLoaded, setIsLoaded], 
  [items, setItems]] = useContext(WeatherContext);

  return (
    <div className='card-container'>
      <div className='row justify-content-start'>
        <div className='col-8 card'>
          <Card style={{ width: '48rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Date</Card.Title>
              <h2>{city}</h2>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Currently: </ListGroupItem>
              <ListGroupItem>Humidity:</ListGroupItem>
              <ListGroupItem>UV Index:</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">10-Day Forecast</Card.Link>
              <Card.Link href="#">Add to Favorites</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Display;