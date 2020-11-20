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
          <a href='#popup1'>
            <div className='projects project_1'></div>
          </a>
          <a href='#popup1'>
            <div className='projects project_2'></div>
          </a>
          <a href='#popup1'>
            <div className='projects project_3'></div>
          </a>
          <a href='#popup1'>
            <div className='projects project_4'></div>
          </a>
          <a href='#popup1'>
            <div className='projects project_5'></div>
          </a>
        </div>
        <div className='work_box work_box2'>
          <h1>Contact: tlamarketing111@gmail.com</h1>
        </div>
      </div>
      {/* Popup 1 */}
      <div className='popup' id='popup1'>
        <div className='popup_container'>
          <div className='popup_left'></div>
          <div className='popup_right'>
            <a href='#cardPage' className='popup_close'>
              &times;
            </a>
            <div className='popup_right_container'></div>
          </div>
        </div>
      </div>
      {/* Popup 1 */}
    </div>
  );
};

export default MyWork;
