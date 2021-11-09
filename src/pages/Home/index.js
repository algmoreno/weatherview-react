import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/Search-Bar';
import Display from '../../components/Display'

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <Header />
        </div>
        <div className='col-12'>
          <SearchBar />
        </div>
        <div className='col-12'>
          <Display />
        </div>
      </div>
    </div>

  )
}

export default Home;