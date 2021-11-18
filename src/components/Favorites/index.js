import React, { useState, useContext } from 'react';
import { WeatherContext } from '../../Contexts/WeatherContext';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { IoMdAddCircle } from 'react-icons/io';

const Favorites = () => {

  const [[city, setCity], [data, setData],
    [error, setError], [isLoaded, setIsLoaded],
    [items, setItems], [temp, setTemp]] = useContext(WeatherContext);

  function toFahrenheit(K) {
    return Math.round(((K - 273.15) * 9) / 5 + 32);
  }


  const elements = ['one', 'two', 'three', 'four'];

  return (
    <div>
      {elements.map((value, index) => {
        return <Card className='favorites-card'>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
</Card>
      })}
    </div>
  )
}

export default Favorites;