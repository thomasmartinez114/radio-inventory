import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>
          Radio Inventory
        </Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='navbar-item'>
              <Link to='/' className='nav-link'>
                Radios
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/create' className='nav-link'>
                Create Radio Log
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
