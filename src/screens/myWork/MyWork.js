import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import './myWork.css';

const MyWork = () => {
  return (
    <div>
      <Navigation />
      <div className='work_container'>
        <div className='gate_opener'>
          <button className='open_gate'>Open</button>
        </div>
        <div className='left_door'></div>
        <div className='right_door'></div>
      </div>
    </div>
  );
};

export default MyWork;
