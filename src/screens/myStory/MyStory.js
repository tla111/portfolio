import React from 'react';
import './myStory.css';
import Navigation from '../../components/navigation/Navigation';

const MyStory = () => {
  return (
    <div>
      <Navigation />
      <header className='about_header'>
        <h2>Leadership | Ping Pong | Communication</h2>
        <h2>These Three Areas of My Life Have One Word in Common</h2>
        <h1>PERSISTENCE</h1>
      </header>
      <div className='comics_container'>
        <div className='ping_pong_comic'></div>
        {/* <div className='ping_pong_comic'></div> */}
      </div>
    </div>
  );
};

export default MyStory;
