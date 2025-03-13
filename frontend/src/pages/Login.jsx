import React, { useState } from 'react';
import BASE_URL from '../config';
import { Form, Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
 import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [data, setData] = useState({});
  const [isloading, setIsloading] = useState(false)
  const navigate = useNavigate();
  const handleInput = (e) => {
    let {name, value} = e.target
    setData({
        ...data,
        [name]:value
    })
  }

  const handleSubmit = async (e) => {
    setIsloading(true)
    e.preventDefault();
    let api = `${BASE_URL}/airway/login`; 
    try {
      const res = await axios.post(api, data);
      console.log(res);
      toast.success("Successfully LoggedIn..");
      localStorage.setItem("name" , res.data.name)
      localStorage.setItem("adminid" , res.data._id)

      
      navigate("/dashboard");
      
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data || "Login failed. Please try again."); 
      setIsloading(false)
    }
  };




  return (
    <>
       <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} xl={4}>
            <Card className="mt-3 shadow" style={{ maxWidth: '100%', overflowY: 'auto', maxHeight: '90vh' }}>
              <Card.Body>
                <h2 className="text-center mb-3 text-primary" style={{ fontSize: '1.5rem' }}>Flight Booking Login</h2>
                <Form onSubmit={handleSubmit}>
                  {/* Select User (Name) */}
                   <Form.Group className="mb-2" controlId="formBasicAirline">
                                   <Form.Label className="fw-bold" style={{ fontSize: '0.9rem' }}>Select Airline</Form.Label>
                                     <Form.Select
                                       aria-label="Default select example"
                                       name="name"
                                       onChange={handleInput}
                                       className="form-control form-control-sm"
                                     >
                                       <option>Open this select menu</option>
                                       <option value="Fly Emirates">Fly Emirates</option>
                                       <option value="Air India">Air India</option>
                                       <option value="Qatar Airways">Qatar Airways</option>
                                       <option value="Etihad Airways">Etihad Airways</option>
                                       <option value="American Airlines">American Airlines</option>
                                     </Form.Select>
                                   </Form.Group>

                  {/* Password Field */}
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label className="fw-bold" style={{ fontSize: '0.9rem' }}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      onChange={handleInput}
                      className="form-control form-control-sm"
                    />
                  </Form.Group>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <Button variant="primary" type="submit" className="fw-bold" style={{ fontSize: '0.9rem' }}>
                      Login
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Login;