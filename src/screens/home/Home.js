import React from 'react';
import Typewriter from 'typewriter-effect';
import Navigation from '../../components/navigation/Navigation';
import './home.css';

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className='home_container'>
        <div className='box box_left'>
          <div className='profile_pic'></div>
        </div>
        <div className='box box_right'>
          <h1>PERSISTENT</h1>
          <div className='typed_text_container'>
            <Typewriter
              options={{
                strings: [
                  'IN CONSISTENTLY IMPROVING MYSELF',
                  'LEADING OTHERS TO BECOME BETTER THAN THEY EXPECT TO BE',
                  'UPLIFTING & BRINGING JOY TO OTHERS',
                ],
                autoStart: true,
                loop: true,
                delay: 30,
                deleteSpeed: 5,
                wrapperClassName: 'Typewriter__wrapper',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
