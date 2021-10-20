import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import useAuth from '../hooks/useAuth';
import './Header.css';
// import { Link } from 'react-router-hash-link';

const Header = () => {

  const { user, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" className="header-container bg-dark" sticky="top">
      <Container >

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">

            <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/service">Services</Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/orderreview">Order Review</Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/testomonial">Testomonial</Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/contactus">Contact Us</Nav.Link>


            <Nav.Link className="text-light" as={Link} to="/faq">FAQ</Nav.Link>
          </Nav>
          <Nav>

            {
              !user?.email ?
                <div className="d-flex">
                  <Nav.Link className="text-light" as={Link} to="/login"> Login </Nav.Link>
                  <Nav.Link className="text-light btn-login px-3" as={Link} to="/signup"> Signup </Nav.Link>
                </div>
                :
                <div className="d-flex">
                  <img src={user?.photoURL} className="profile-image" alt="profile" />
                  <p className="text-light mx-2">{user?.displayName}</p>
                  <button onClick={logOut} className="btn-login px-3 me-3">Logout</button>

                </div>
            }






          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >





  );
};

export default Header;