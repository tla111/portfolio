/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './myWork.css';

const MyWork = () => {
  return (
    <div>
      <Container fluid className='work_container' id='work_page'>
        {/* <div className='left_door' id='l_door'></div>
        <div className='right_door' id='r_door'></div> */}
        <Row className='work_box1'>
          <Col className='work_box_col'>
            <a href='#popup1'>
              <div className='projects project_1'></div>
            </a>
          </Col>
          <Col className='work_box_col'>
            <a href='#popup1'>
              <div className='projects project_2'></div>
            </a>
          </Col>
          <Col className='work_box_col'>
            <a href='#popup1'>
              <div className='projects project_3'></div>
            </a>
          </Col>
          <Col className='work_box_col'>
            <a href='#popup1'>
              <div className='projects project_4'></div>
            </a>
          </Col>
          <Col className='work_box_col'>
            <a href='#popup1'>
              <div className='projects project_5'></div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className='work_box2'>
            <h1>Contact: tlamarketing111@gmail.com</h1>
          </Col>
        </Row>
      </Container>
      {/* Popup 1 */}
      <Container fluid className='popup' id='popup1'>
        <Row className='popup_container'>
          <Col className='project_info'>
            <div className='info_section1'>
              <p></p>
            </div>
            <div className='info_section2'>
              <h3>
                Front End: <span>React</span>
              </h3>
            </div>
            <div className='info_section3'>
              <h3>
                Back End: <span>Mongo, Node, Express</span>
              </h3>
            </div>
          </Col>
          <Col>
            <div className='popup_buttons'>
              <a href='https://www.google.com' target='_blank'>
                <button className='popup_but'>Website</button>
              </a>
              <a href='https://github.com/tla111/work-it-out1' target='_blank'>
                <button className='popup_but'>Code</button>
              </a>
            </div>
          </Col>
          <a href='#work' className='popup_close'>
            &times;
          </a>
        </Row>
      </Container>
      {/* Popup 1 */}
    </div>
  );
};

export default MyWork;
