import React from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../src/assets/logo.png"




const Header = () => {
  return (
    <div className="head">
      <Navbar expand="lg" className='bg-white'>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0  gap-lg-4 "
              // style={{ maxHeight: "50px" }}
              navbarScroll >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/portfolio"> Portfolio </Nav.Link>
              <Nav.Link href="#about">About me</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            </Nav>

            <Button
              variant="outline-primary"
              style={{ width: "140px", height: "50px" }}
            >
              Contact Me
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header