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
        <Card className='list-group-flush favorites-card'>
          <Card.Body className='row'>
            <Card.Text className='col-1 favorite-city'>
              {titleCase(key.name)}
            </Card.Text>
            <Card.Text className='col-1 favorite-city'>
              {toFahrenheit(key.degrees)}˚F
            </Card.Text>
            <div className='col-9'>

            </div>
            <Card.Text className='minus-icon-div col-1'>
              <AiFillMinusCircle className='minus-icon' onClick={removeFav} />
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      })}
    </div>
  )
}

export default Favorites;