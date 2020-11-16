import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navigation = () => {
  return (
    <ul className='navList'>
      <li className='navList_li'>
        <Link to='/' className='navList_li_link'>
          Home
        </Link>
      </li>
      <li className='navList_li'>
        <Link to='/about' className='navList_li_link'>
          My Story
        </Link>
      </li>
      <li className='navList_li'>
        <Link to='/work' className='navList_li_link'>
          My Work
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
