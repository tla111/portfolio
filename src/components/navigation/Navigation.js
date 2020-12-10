import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css';

const Navigation = () => {
  return (
    <Nav className='justify-content-end navList' activeKey='/home'>
      <Nav.Item className='nav_item'>
        <Link to='/' className='nav_link'>
          Home
        </Link>
      </Nav.Item>
      <Nav.Item className='nav_item'>
        <Link to='/work' className='nav_link'>
          Portfolio
        </Link>
      </Nav.Item>
      <Nav.Item className='nav_item'>
        <Link to='/about' className='nav_link' href='/about'>
          Story
        </Link>
      </Nav.Item>
      {/* <Nav.Item className='nav_item'>
        <Link to='/profile' className='nav_link' href='/profile'>
          Profile
        </Link>
      </Nav.Item> */}
    </Nav>
  );
};

export default Navigation;
