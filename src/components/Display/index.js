import React, { useState, useContext } from 'react';
import { WeatherContext } from '../../Contexts/WeatherContext';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

function Display() {

  formatDate();

  const [[city, setCity], [data, setData],
    [error, setError], [isLoaded, setIsLoaded],
    [items, setItems]] = useContext(WeatherContext);

  function formatDate() {
    let today = new Date();
    let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    return date
  }

  function toFahrenheit(K) {
    return Math.round(((K - 273.15) * 9) / 5 + 32);
  }

  function titleCase(str) {
    let convertToArray = str.toLowerCase().split(" ");

    let result = convertToArray.map(function (val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });

    return result.join(" ")
  }

  console.log(items.weather[0].main)

  return (
    <div className={items.weather[0].main}>
      <div className='row justify-content-start'>
        <div className='col-9 card'>
          <Card className='weather-card' style={{ width: '48rem' }}>
            <Card.Body className='weather-card-body'>
              <Card.Title>{formatDate()}</Card.Title>
              <h2>{items.name}</h2>
              <Card.Text>
                {titleCase(items.weather[0].description)}
              </Card.Text>
              <Card.Text>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush weather-card-list">
              <ListGroupItem className='row'>
                <h6 className='col-4'>Currently: {toFahrenheit(items.main.temp)} </h6>
                <h6 className='col-4'>High: {toFahrenheit(items.main.temp_max)} </h6>
                <h6 className='col-4'>Low: {toFahrenheit(items.main.temp_min)} </h6>
              </ListGroupItem>
              <ListGroupItem>Humidity: {items.main.humidity}%</ListGroupItem>
              <ListGroupItem>Wind Speed: {items.wind.speed} m/s</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Add to Favorites</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Display;