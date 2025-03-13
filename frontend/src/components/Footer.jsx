import React from "react";
import { Link } from 'react-router-dom'
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; 


const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 footer">
      <Container>
        <Row>

          <Col md={4} className="mb-4">
            <h5 className="footer-heading">About Us</h5>
            <p className="footer-text">
              We are a leading airline  <br /> company dedicated to providing <br /> the best travel experience. <br /> Fly with us to explore the <br /> world in comfort and style.
            </p>
            <hr />
            <h5 className="footer-heading">Book</h5>
            <p className="footer-text">
            Book flights <br />
             Travel services <br />
           Transportation <br />
               Planning your trip
            </p>
            
           
          </Col>
          

          
          <Col md={4} className="mb-4 ">
            <h5 className="footer-heading">Quick Links</h5>
            <Nav className="flex-column " data-bs-theme="light">
              <Nav.Link as={Link} to="home" className="footer-link ">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/registration" className="footer-link">
                Flights
              </Nav.Link>
              <Nav.Link  as={Link} to="#" className="footer-link">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="#" className="footer-link">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="#" className="footer-link">
                Privacy Policy
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="mb-4">
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="footer-text mb-2">
                <FaMapMarkerAlt className="footer-icon" />
                123 Airline Street, City, Country
              </li>
              <li className="footer-text mb-2">
                <FaPhone className="footer-icon" />
                +1 234 567 890
              </li>
              <li className="footer-text mb-2">
                <FaEnvelope className="footer-icon" />
                info@airline.com
              </li>
            </ul>
            <div className="d-flex">
              
                <FaFacebook size={20} />
              
                
                <FaTwitter size={20} />
              
              
                <FaInstagram size={20} />
            
                <FaLinkedin size={20} />
              
            </div>
          </Col>
        </Row>
                 <li className="img">
                 <div><img src="apple-en.svg" alt="" /></div>
                 <div><img src="google-en.svg" alt="" /></div>
                 </li>
        {/* Copyright Section */}
        <Row>
          <Col className="text-center mt-3">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Airline Name. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;