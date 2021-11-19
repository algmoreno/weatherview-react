import React, { useState, useContext } from 'react';
import { WeatherContext } from '../../Contexts/WeatherContext';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { IoMdAddCircle } from 'react-icons/io';

const Favorites = () => {

  const [[city, setCity], [data, setData],
    [error, setError], [isLoaded, setIsLoaded],
    [items, setItems], [temp, setTemp], [favorites, setFavorites]] = useContext(WeatherContext);

  function toFahrenheit(K) {
    return Math.round(((K - 273.15) * 9) / 5 + 32);
  }

  const elements = [1, 2, 3, 4]
  return (
    <div>
      {elements.map((key, value) => {
        return <Card className='favorites-card'>
  <Card.Body>
    <Card.Title>{key}</Card.Title>
    <Card.Text>
      {value}
    </Card.Text>
  </Card.Body>
</Card>
      })}
    </div>
  )
}

export default Favorites;