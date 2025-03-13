import { useNavigate, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Dashboard = () => {
  const [travelerList, setTravelerList] = useState([]);
const navigate = useNavigate()
  useEffect(() => {
    // Fetch traveler data (assuming it's stored in localStorage or from an API)
    const storedTravelers = JSON.parse(localStorage.getItem("travelers")) || [];
    setTravelerList(storedTravelers);
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  }
const myBooking = ()=>{
  navigate('/myBookings')
}
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#" className="text-primary">Welcome To FlyHigh Airline</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Button className="me-2" variant="primary" onClick={logout}>Logout</Button>
            <Button as = {Link} to = "myBookings" onClick = {myBooking}>Bookings</Button>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
     
      <div className="text-center">
        <h1 className="text-info">
           {localStorage.getItem("name")} 
        </h1>
      
        <hr style={{
          width: "100%",
          margin: "20px auto",
          height: "2px",
          backgroundColor: "black",
          border: "none"
        }} />
      </div>
   


      <Container>
        <h4>Booking Available</h4>
        <br />
        
        
      </Container>
      <Outlet />
    </>
  );
};

export default Dashboard;
