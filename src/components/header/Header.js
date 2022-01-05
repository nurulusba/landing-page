import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.scss";

const Header = () => {
  const navigation = useNavigate()

  return (
    <Navbar bg="light" expand="lg" className="header-section">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#insurance">insurance</Nav.Link>
          <Nav.Link href="#claim">Claim</Nav.Link>
          <Nav.Link href="#info-center">Info center</Nav.Link>
          <Nav.Link href="#aboutus">About Us</Nav.Link>

          <Nav.Link href="#quote">Get a qoute</Nav.Link>
          <Nav.Link href="#make-payments">Make Payments</Nav.Link>
          <Nav.Link href="#billing">Billing</Nav.Link>
          <Nav.Link href="#contactus">Contact Us</Nav.Link>
          <Button className="header-btn" variant="primary" onClick={() => navigation('/confirm-address')}>
            Get A Quote
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
