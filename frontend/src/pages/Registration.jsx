import React from 'react';
import { Form, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import BASE_URL from '../config';
import axios from 'axios';

const Registration = () => {
  const [input, setInput] = useState({})
  const handleInput= (e) =>{
      let {name, value} = e.target
      setInput({
        ...input, [name]:value
      })
     

      }
      const handleSubmit = async(e) =>{
        e.preventDefault()
        let api = `${BASE_URL}/airway/registration`
     try {
      let res = await axios.post(api, input)
      console.log(res)
      toast.success("Data Save")
     } catch (error) {
      console.log(error)
      
     }
      }

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} xl={4}>
            <Card className="mt-3 shadow" style={{ maxWidth: '100%', overflowY: 'auto', maxHeight: '90vh' }}>
              <Card.Body>
                <h2 className="text-center mb-3 text-primary" style={{ fontSize: '1.5rem' }}>Flight Registration</h2>
                <Form onSubmit={handleSubmit}> {/* Add onSubmit to the form */}
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

                  <Form.Group className="mb-2" controlId="formBasicDeparture">
                    <Form.Label className="fw-bold" style={{ fontSize: '0.9rem' }}>Departure City</Form.Label>
                    <Form.Control
                      type="text"
                      name="departure"
                      onChange={handleInput}
                      className="form-control form-control-sm"
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicDestination">
                    <Form.Label className="fw-bold" style={{ fontSize: '0.9rem' }}>Destination City</Form.Label>
                    <Form.Control
                      type="text"
                      name="destination"
                      onChange={handleInput}
                      className="form-control form-control-sm"
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicDate">
                    <Form.Label className="fw-bold" style={{ fontSize: '0.9rem' }}>Departure Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      onChange={handleInput}
                      className="form-control form-control-sm"
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicTime">
                    <Form.Label className="fw-bold" style={{ fontSize: '0.9rem' }}>Departure Time</Form.Label>
                    <Form.Control
                      type="time"
                      name="time"
                      onChange={handleInput}
                      className="form-control form-control-sm"
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicAirline">
                    <Form.Label className="fw-bold" style={{ fontSize: '0.9rem' }}>Select Class</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="flightclass"
                      onChange={handleInput}
                      className="form-control form-control-sm"
                    >
                      <option>Open this select menu</option>
                      <option value="First Class">First Class</option>
                      <option value="Business Class">Business Class</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Economy">Economy</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label className="fw-bold" style={{ fontSize: '0.9rem' }}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={handleInput}
                      className="form-control form-control-sm"
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="primary" type="submit" className="fw-bold" style={{ fontSize: '0.9rem' }}>
                      Register
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer /> {/* Add ToastContainer to display toast messages */}
    </>
  );
};

export default Registration;