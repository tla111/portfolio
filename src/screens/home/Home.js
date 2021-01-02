import React from 'react';
import Typewriter from 'typewriter-effect';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row className='row_container'>
          <Col sm={12} md={6} className='box_left'>
            <div className='profile_pic' />
            <h1>TIM LA</h1>
            <div className='fullstack'></div>
            <h1>Full Stack Web Developer</h1>
          </Col>
          <Col sm={6} md={6} className='box_right'>
            <div className='typed_text_container'>
              <h1>PERSISTENT IN</h1>
              <Typewriter
                options={{
                  strings: [
                    'CONSISTENTLY IMPROVING MYSELF',
                    'LEADING OTHERS TO BECOME BETTER THAN THEY EXPECT TO BE',
                    'UPLIFTING & BRINGING JOY TO OTHERS',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 5,
                  cursorClassName: 'Typewriter__cursor',
                  wrapperClassName: 'Typewriter__wrapper',
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
