import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../config';
import { Container, Table, Spinner, Alert, Card } from 'react-bootstrap';

const MyBookings = () => {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = async () => {
        try {
            const api = `${BASE_URL}/airway/getData/?adminid=${localStorage.getItem("adminid")}`;
            const res = await axios.get(api);
            setApiData(res.data);
        } catch (error) {
            console.error(error);
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Container className="mt-4">
            <Card>
                <Card.Header as="h5">My Bookings</Card.Header>
                <Card.Body>
                    {loading ? (
                        <div className="text-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : error ? (
                        <Alert variant="danger">{error}</Alert>
                    ) : (
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Class</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {apiData.map((e, index) => (
                                    <tr key={index}>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.mobile}</td>
                                        <td>{e.flightclass}</td>
                                        <td>{e.country}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MyBookings;