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
          <a href='https://www.google.com/' target='_blank'>
            <div className='projects project_1'></div>
          </a>
          <a href='https://www.google.com/' target='_blank'>
            <div className='projects project_2'></div>
          </a>
          <a href='https://www.google.com/' target='_blank'>
            <div className='projects project_3'></div>
          </a>
          <a href='https://www.google.com/' target='_blank'>
            <div className='projects project_4'></div>
          </a>
          <a href='https://www.google.com/' target='_blank'>
            <div className='projects project_5'></div>
          </a>
        </div>
        <div className='work_box work_box2'>
          <h1>Contact: tlamarketing111@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
