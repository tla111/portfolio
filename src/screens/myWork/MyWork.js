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
          <div className='project_info'>
            <div className='info_section1'>
              <p></p>
            </div>
            <div className='info_section2'>
              <h3>Front End:</h3>
              <p>React</p>
            </div>
            <div className='info_section3'>
              <h3>Back End:</h3>
              <p>Mongo, Node, Express</p>
            </div>
          </div>
          <div className='popup_buttons'>
            <a href='https://www.google.com'>
              <button className='popup_but'>Website</button>
            </a>

            <a href='https://github.com/tla111/work-it-out1'>
              <button className='popup_but'>Code</button>
            </a>
          </div>
          <a href='#cardPage' className='popup_close'>
            &times;
          </a>
        </div>
      </div>
      {/* Popup 1 */}
    </div>
  );
};

export default MyWork;
