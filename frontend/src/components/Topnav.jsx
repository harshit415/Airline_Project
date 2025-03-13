import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Topnav = () => {
  return (
    <>
    
    <Navbar bg="primary"  data-bs-theme="dark" expand="lg" >
        <Container>
          <Navbar.Brand href="#home"><img src="/logo2.jpg" alt="" style={{width:"50%"}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="home" className="text-light">Home</Nav.Link>
              <Nav.Link as={Link} to="registration" className="text-light">Flight Registration</Nav.Link>
              <Nav.Link as={Link} to="login" className="text-light">Login</Nav.Link>
              <Nav.Link as={Link} to="search" className="text-light">Search</Nav.Link>
             
         




              
        

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      
    
    
    </>
  )
}

export default Topnav
