import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './myStory.css';
import leader1 from './images/leadership/leader1.png';
import leader2 from './images/leadership/leader2.png';
import leader3 from './images/leadership/leader3.png';
import leader4 from './images/leadership/leader4.png';
import leader5 from './images/leadership/leader5.png';
import leader6 from './images/leadership/leader6.png';

const MyStory = () => {
  const leadership_comics = [
    {
      id: 1,
      image: leader1,
    },
    {
      id: 2,
      image: leader2,
    },
    {
      id: 3,
      image: leader3,
    },
    {
      id: 4,
      image: leader4,
    },
    {
      id: 5,
      image: leader5,
    },
    {
      id: 6,
      image: leader6,
    },
  ];

  return (
    <Container fluid>
      <Row className='about_header'>
        <h2>Leadership | Ping Pong | Communication</h2>
        <h2>These Three Areas of My Life Have One Word in Common</h2>
        <h1>PERSISTENCE</h1>
      </Row>
      <Row className='comics_container'>
        <div className='leadership_container'>
          {leadership_comics.map((leader) => (
            <img src={leader.image} key={leader.id} alt='leader' />
          ))}
        </div>
        {/* <div className='ping_pong_comic'></div>
        <div className='communication_comic'></div> */}
      </Row>
    </Container>
  );
};

export default MyStory;
