import React, { useState } from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/Search-Bar';
import Display from '../../components/Display'
import { WeatherContext } from '../../Contexts/WeatherContext';
 
const Home = () => {

  const [city, setCity] = useState('');
  const [data, setData] = useState(false);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  return (
    <WeatherContext.Provider value={[[city, setCity], [data, setData], [error, setError], [isLoaded, setIsLoaded], [items, setItems]]}>
      <div className='container'>
      <div className='row justify-content-start'>
        <div className='col-12'>
          <Header className='header' />
        </div>
        <div className='col-12 search-bar'>
          <SearchBar />
        </div>
        <div className='col-12'>
          <Display />
        </div>
      </div>
    </div>
    </WeatherContext.Provider>
  )
}

export default Home;