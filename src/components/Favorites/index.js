import React, { useState, useContext, useEffect } from 'react';
import { WeatherContext } from '../../Contexts/WeatherContext';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { IoMdAddCircle } from 'react-icons/io';
import { AiFillMinusCircle } from 'react-icons/ai';

const Favorites = () => {

  const [[city, setCity],
    [error, setError], [isLoaded, setIsLoaded], [style, setStyle],
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

  useEffect(() => {
    const data = localStorage.getItem("favorites-list");
    if (data) {
      setFavorites(JSON.parse(data))
    }
  }, []);

  function removeFav() {
    localStorage.removeItem("favorites-list")
  }

  console.log(favorites);

  return (
    <div className='favorites-container'>
      {favorites.map((key) => {
        console.log(key);
        return <div className={key.class}> 
        <Card className='favorites-card'>
          <Card.Body>
            <Card.Title>{titleCase(key.name)}</Card.Title>
            <Card.Text>
              {toFahrenheit(key.degrees)}˚F
            </Card.Text>
            <Card.Text>
              <AiFillMinusCircle onClick={removeFav} />
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      })}
    </div>
  )
}

export default Favorites;