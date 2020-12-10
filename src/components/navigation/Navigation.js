import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './nav.css';

const Navigation = () => {
  return (
    <Nav className='justify-content-end navList' activeKey='/home'>
      <Nav.Item className='nav_item'>
        <Nav.Link className='nav_link' href='/'>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav_item'>
        <Nav.Link className='nav_link' href='/work'>
          Portfolio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav_item'>
        <Nav.Link className='nav_link' href='/about'>
          Story
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav_item'>
        <Nav.Link className='nav_link' href='/profile'>
          Profile
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
