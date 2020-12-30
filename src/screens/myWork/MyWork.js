/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './myWork.css';

const MyWork = () => {
  return (
    <div>
      <Container fluid className='work_container' id='work_page'>
        <div className='left_door' id='l_door'></div>
        <div className='right_door' id='r_door'></div>
        <Row className='work_box1'>
          <Col className='work_box_col'>
            <a href='#popup1'>
              <div className='projects project_1'></div>
            </a>
          </Col>
          <Col className='work_box_col'>
            <a href='#popup2'>
              <div className='projects project_2'></div>
            </a>
          </Col>
          <Col className='work_box_col'>
            <a href='#popup3'>
              <div className='projects project_3'></div>
            </a>
          </Col>
          <Col className='work_box_col'>
            <a href='#popup4'>
              <div className='projects project_4'></div>
            </a>
          </Col>
          <Col className='work_box_col'>
            <a href='#popup5'>
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
              <p>Work It Out 2020</p>
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
              <a href='https://work-it-out-2020.herokuapp.com/' target='_blank'>
                <button className='popup_but'>Website</button>
              </a>
              <a
                href='https://github.com/tla111/Work-It-Out-2020'
                target='_blank'
              >
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
      {/* Popup 2 */}
      <Container fluid className='popup' id='popup2'>
        <Row className='popup_container'>
          <Col className='project_info'>
            <div className='info_section1'>
              <p>Vision Myself</p>
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
              <a href='https://vision-myself.netlify.app/' target='_blank'>
                <button className='popup_but'>Website</button>
              </a>
              <a href='https://github.com/tla111/vision-myself' target='_blank'>
                <button className='popup_but'>Code</button>
              </a>
            </div>
          </Col>
          <a href='#work' className='popup_close'>
            &times;
          </a>
        </Row>
      </Container>
      {/* Popup 2 */}
      {/* Popup 3 */}
      <Container fluid className='popup' id='popup3'>
        <Row className='popup_container'>
          <Col className='project_info'>
            <div className='info_section1'>
              <p>Investment</p>
            </div>
            <div className='info_section2'>
              <h3>
                Front End: <span>React</span>
              </h3>
            </div>
            <div className='info_section3'>
              <h3>
                Back End: <span>Mongo, Node</span>
              </h3>
            </div>
          </Col>
          <Col>
            <div className='popup_buttons'>
              <a
                href='https://investing-in-investing.netlify.app/'
                target='_blank'
              >
                <button className='popup_but'>Website</button>
              </a>
              <a
                href='https://github.com/tla111/investing-in-investing_frontend'
                target='_blank'
              >
                <button className='popup_but'>Front-End Code</button>
              </a>
              <a
                href='https://github.com/tla111/investing-in-investing_backend'
                target='_blank'
              >
                <button className='popup_but'>Back-End Code</button>
              </a>
            </div>
          </Col>
          <a href='#work' className='popup_close'>
            &times;
          </a>
        </Row>
      </Container>
      {/* Popup 3 */}
      {/* Popup 4 */}
      <Container fluid className='popup' id='popup4'>
        <Row className='popup_container'>
          <Col className='project_info'>
            <div className='info_section1'>
              <p>Cars</p>
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
              <a href='https://github.com/tla111/se-q3-iss' target='_blank'>
                <button className='popup_but'>Code</button>
              </a>
            </div>
          </Col>
          <a href='#work' className='popup_close'>
            &times;
          </a>
        </Row>
      </Container>
      {/* Popup 4 */}
      {/* Popup 5 */}
      <Container fluid className='popup' id='popup5'>
        <Row className='popup_container'>
          <Col className='project_info'>
            <div className='info_section1'>
              <p>Meiwah</p>
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
              <a href='https://www.meiwahrestaurant.com/' target='_blank'>
                <button className='popup_but'>Website</button>
              </a>
            </div>
          </Col>
          <a href='#work' className='popup_close'>
            &times;
          </a>
        </Row>
      </Container>
      {/* Popup 5 */}
    </div>
  );
};

export default MyWork;
