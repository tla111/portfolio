import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import './myWork.css';

const MyWork = () => {
  return (
    <div>
      <Navigation />
      <div className='work_container'>
        <div className='left_door' id='l_door'></div>
        <div className='right_door' id='r_door'></div>
      </div>
    </div>
  );
};

export default MyWork;
