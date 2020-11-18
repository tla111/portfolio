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
        <div className='work_box work_box1'>
          <div className='projects'></div>
          <div className='projects'></div>
          <div className='projects'></div>
          <div className='projects'></div>
          <div className='projects'></div>
        </div>
        <div className='work_box work_box2'></div>
        <div className='work_box work_box3'></div>
        <div className='work_box work_box4'></div>
        <div className='work_box work_box5'></div>
      </div>
    </div>
  );
};

export default MyWork;
