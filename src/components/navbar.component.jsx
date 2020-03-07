import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Blood bank</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="text-dark nav-link">All Blood Bank</Link>
          </li>
        </ul>
        <Link className="btn btn-outline-primary btn-sm" to="/login">
          <i class="fas mr-2 fa-user"></i>
          Login / Sign Up
        </Link>
        </div>
      </nav>
    );
  }
}