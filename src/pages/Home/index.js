import React, { useState, useReducer } from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/Search-Bar';
import Display from '../../components/Display'
import Favorites from '../../components/Favorites';
import { WeatherContext } from '../../Contexts/WeatherContext';

const Home = () => {

  const [city, setCity] = useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [temp, setTemp] = useState('');
  const [style, setStyle] = useState('');
  const [favorites, setFavorites] = useState([])


  return (
    <WeatherContext.Provider value={[[city, setCity], [error, setError],
    [isLoaded, setIsLoaded], [items, setItems], [style, setStyle], [temp, setTemp], [favorites, setFavorites]]}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Header className='header' />
          </div>
          {isLoaded ?
            <div className='col-11 display-col'>
              <Display />
            </div>
            :
            <h3 className='search-city-text'>Search a city</h3>
          }
          <div className='col-12 favorites-section'>
            <Favorites />
          </div>
        </div>
      </div>
    </WeatherContext.Provider>
  )
}

export default Home;