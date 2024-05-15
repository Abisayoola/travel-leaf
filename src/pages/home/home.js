import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import './home.css'
import Info from '../../components/Info/Info';
import Featured from '../../components/Featured/Featured';

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='homeContainer'>
        <Info/>
        <Featured/>

      </div>
    </div>
  )
}

export default Home
