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

  function titleCase(str) {
    let convertToArray = str.toLowerCase().split(" ");

    let result = convertToArray.map(function (val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ")
  }

  console.log(favorites);

  return (
    <div>
      {favorites.map((key) => {
        console.log(key);
        return <Card className='favorites-card'>
  <Card.Body>
    <Card.Title>{titleCase(key.name)}</Card.Title>
    <Card.Text>
      {toFahrenheit(key.degrees)}˚F
    </Card.Text>
  </Card.Body>
</Card>
      })}
    </div>
  )
}

export default Favorites;