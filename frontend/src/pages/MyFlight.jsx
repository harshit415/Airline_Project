import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config";
import Button from "react-bootstrap/esm/Button";
import { ToastContainer, toast } from 'react-toastify';


const MyFlight = () => {
  const {id} = useParams();
 const [docInfo, setDocInfo] = useState({})
 const [input, setInput] = useState({})
 const loadData = async() => {
   let api = `${BASE_URL}/myairway/myflights/?id=${id}`

 try {
 
  const res = await axios.post(api)
  console.log(res.data)
  setDocInfo(res.data)

 } catch (error) {
  console.log(error)
 }
}
useEffect(()=>{
  loadData()
},[])

const handleInput = (e) =>{
  let {name, value} = e.target
  setInput({
    ...input,
    [name]:value
  
  })
  console.log(input)
}

const handleSubmit = async(e) => {
  e.preventDefault()
        let api = `${BASE_URL}/myairway/bookedflight`
        try {
          const response = await axios.post(api, {adminid:id, ...input});
          console.log(response)
          toast.success("data save");
      } catch (error) {
           console.log(error);
      }
}
  return (
    <>
    <h1>Your flight name : {docInfo.name}</h1>
     <Container
      fluid
      className="bg-gradient"
      style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        padding: "20px 0", // Add padding only to the top and bottom
      }}
    >
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={4}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4 text-primary fw-bold">Fill The Details</h2>
              <Form onSubmit={handleSubmit}>
                {/* Name Field */}
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label className="fw-bold">Enter Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={handleInput}
                    className="rounded-3"
                    required
                  />
                </Form.Group>

                {/* Email Field */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">Enter Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleInput}
                    className="rounded-3"
                    required
                  />
                </Form.Group>

                {/* Contact No Field */}
                <Form.Group className="mb-3" controlId="formBasicMobile">
                  <Form.Label className="fw-bold">Enter Contact No</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile"
                    onChange={handleInput}
                    className="rounded-3"
                    required
                  />
                </Form.Group>

                {/* Flight Class Field */}
                <Form.Group className="mb-3" controlId="formBasicFlightclass">
                  <Form.Label className="fw-bold">Select Class</Form.Label>
                  <Form.Select
                    name="flightclass"
                    onChange={handleInput}
                    className="rounded-3"
                    required
                  >
                    <option value="">Open this select menu</option>
                    <option value="First Class">First Class</option>
                    <option value="Business Class">Business Class</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Economy">Economy</option>
                  </Form.Select>
                </Form.Group>

                {/* Departure City Field */}
                <Form.Group className="mb-3" controlId="formBasicCountry">
                  <Form.Label className="fw-bold">Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    onChange={handleInput}
                    className="rounded-3"
                    required
                  />
                </Form.Group>

                {/* Submit Button */}
                <div className="d-grid">
                  <Button
                    variant="primary"
                    type="submit"
                    className="fw-bold rounded-3 py-2"
                  >
                    Register
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
    
    </>
  )
}

export default MyFlight
