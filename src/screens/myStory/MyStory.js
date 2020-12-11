import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './myStory.css';
import leader1 from './images/leadership/leader1.png';
import leader2 from './images/leadership/leader2.png';
import leader3 from './images/leadership/leader3.png';
import leader4 from './images/leadership/leader4.png';
import leader5 from './images/leadership/leader5.png';
import leader6 from './images/leadership/leader6.png';
import pong1 from './images/pingpong/pong1.png';
import pong2 from './images/pingpong/pong2.png';
import pong3 from './images/pingpong/pong3.png';
import pong4 from './images/pingpong/pong4.png';
import pong5 from './images/pingpong/pong5.png';
import pong6 from './images/pingpong/pong6.png';
import comm1 from './images/communication/comm1.png';
import comm2 from './images/communication/comm2.png';
import comm3 from './images/communication/comm3.png';
import comm4 from './images/communication/comm4.png';
import comm5 from './images/communication/comm5.png';
import comm6 from './images/communication/comm6.png';

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
  const ping_pong_comics = [
    {
      id: 1,
      image: pong1,
    },
    {
      id: 2,
      image: pong2,
    },
    {
      id: 3,
      image: pong3,
    },
    {
      id: 4,
      image: pong4,
    },
    {
      id: 5,
      image: pong5,
    },
    {
      id: 6,
      image: pong6,
    },
  ];
  const communication_comics = [
    {
      id: 1,
      image: comm1,
    },
    {
      id: 2,
      image: comm2,
    },
    {
      id: 3,
      image: comm3,
    },
    {
      id: 4,
      image: comm4,
    },
    {
      id: 5,
      image: comm5,
    },
    {
      id: 6,
      image: comm6,
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
        <div className='comic_container'>
          {leadership_comics.map((leader) => (
            <img src={leader.image} key={leader.id} alt='leadership comic' />
          ))}
        </div>
        <div className='comic_container'>
          {ping_pong_comics.map((pong) => (
            <img src={pong.image} key={pong.id} alt='ping pong comic' />
          ))}
        </div>
        <div className='comic_container'>
          {communication_comics.map((comm) => (
            <img src={comm.image} key={comm.id} alt='communication comic' />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default MyStory;
