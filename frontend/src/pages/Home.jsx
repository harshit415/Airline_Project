import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import axios from 'axios'
import Button from 'react-bootstrap/Button';


import Image from 'react-bootstrap/Image';
import { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import BASE_URL from '../config';
const Home = () => {
  const navigate = useNavigate()
  const[apiData , setApiData] = useState([])
 
  const loadData = async()=>{
    let api = `${BASE_URL}/airway/show`
    try {
      const res = await axios.get(api)
      setApiData(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    loadData()
  } , [])
  const navi = (id) =>{
    navigate(`/myflight/${id}`)
  }
 

 const ans = apiData.map((e, index) => (
   <Col key={e} sm={12} md={6} lg={4} className="mb-4">
     <Card border="info" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
       <Card.Img
         variant="top"
         src="booking.webp" 
         alt="Flight Image"
         style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
       />
       <Card.Body>
         <Card.Title className="text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>
           {e.name}
         </Card.Title>
         <Card.Text style={{ fontSize: '1rem', color: '#555', textAlign:"center" }}>
          
           <strong>From:</strong> {e.departure}       
           <strong>To:</strong> {e.destination} <br /> 
           <strong> Date:</strong> {e.date} <br />
           <strong>Arrival Time:</strong> {e.time}
          


         </Card.Text>
         <div className="text-center">
           <Button
             variant="primary"
             style={{
               backgroundColor: '#007bff',
               border: 'none',
               borderRadius: '25px',
               padding: '10px 20px',
               fontSize: '1rem',
               fontWeight: 'bold',
             }}
             onClick={()=>{navi(e._id)}}
           >
             Book Now
           </Button>
         </div>
       </Card.Body>
     </Card>
   </Col>
 ))
  return (
    <>
    
    <Card>
        <div className="text-overlay">
          <p>COMFORT GAUARANTEED</p>
          <p style={{ fontSize: "small" }}>Sky is wating for you</p>
        </div>
        <Image src="slider_bg4.png" fluid />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <h2 className="text-center mt-4 pb-2">
       <Badge bg="info">Avaliable Flights</Badge>
      </h2>
    

      <Container fluid style={{backgroundColor:"skyblue"}} className="pt-4">
        <Row>
          {ans}
        </Row>
      </Container>
    </>
  )
}

export default Home
