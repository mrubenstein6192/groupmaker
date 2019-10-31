import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar className="navbar nav-toggle hide-md navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Registration
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-light mx-2" to="/classrooms">
              My Classrooms
            </Link>
          </li>
         
        </ul>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
