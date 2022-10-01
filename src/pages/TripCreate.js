import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {Card} from 'react-bootstrap';
import { createTrip } from '../utils/api';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../context/auth.context'

const API_URL = "http://localhost:5005/api"

export default function TripCreate () {

    const navigate = useNavigate();

    const {user} = useContext (AuthContext)
 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    // const [upload, setUpload] = useState();
    const [status, setStatus] = useState("Planned")
    const [publicOrPrivate, setPublicOrPrivate] = useState("Private")

    const handleSubmit = (e) => {
        e.preventDefault();
        // createTrip(e).then((res) => {
        // const data = res.data;
        // navigate(`/trips/${data._id}`)
        // })
        
        const requestBody = { title, description, country, city, startDate, endDate, status, publicOrPrivate, owner: user._id };
        axios
          .post(`${API_URL}/trips`, requestBody)
          .then((response) => {
            const tripId = response.data.trips[response.data.trips.length-1]
            //console.log(tripId)
            // Reset the state
            setTitle("");
            setDescription("");
            setCountry ("");
            setCity ("");
            setStartDate("");
            setEndDate("");
            setStatus("");
            setPublicOrPrivate("")

            navigate(`/trips/${tripId}`)
            // navigate(`/`)
          })
          .catch((error) => console.log(error));
    }

    return (
        <Row className="justify-content-center" style={{height: '100%'}}>
            <Col>
                <Card className='create-trip-form' style={{ width: '50rem' }}>
                <Card.Title className="text-center">Add trip</Card.Title>
                    <Form onSubmit={handleSubmit}>
                            <Form.Group as={Row} className="mb-3" controlId="title">
                                <Form.Label column sm={2}>
                                Title
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control required type="text"
                                    value={title} 
                                    onChange={e=>setTitle(e.target.value)}
                                />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="description">
                                <Form.Label column sm={2}>
                                Description
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control as="textarea" rows={3}
                                    value={description}
                                    onChange={e=>setDescription(e.target.value)}
                                />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="country">
                                <Form.Label column sm={2}>
                                Country
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="text"
                                    value={country}
                                    onChange={e=>setCountry(e.target.value)}
                                />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="city">
                                <Form.Label column sm={2}>
                                City
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="text"
                                    value={city}
                                    onChange={e=>setCity(e.target.value)}
                                />
                                </Col>
                            </Form.Group>
{/* 
                            <label>Start date:</label>
                            <input
                            type="date"
                            name="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            />

                            <label>End date:</label>
                            <input
                            type="date"
                            name="endDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            /> */}

                            <Form.Group as={Row} className="mb-3" controlId="startDate">
                                <Form.Label column sm={2}>
                                Start date
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="date" 
                                    value={startDate}
                                    onChange={e=>setStartDate(e.target.value)}
                                />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="endDate">
                                <Form.Label column sm={2}>
                                End date
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="date" 
                                    value={endDate}
                                    onChange={e=>setEndDate(e.target.value)}
                                />
                                </Col>
                            </Form.Group>

                            {/* <Form.Group as={Row} className="position-relative mb-3" controlId="file">
                                <Form.Label column sm={2}>
                                Upload photo
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="file" name="file" 
                                    value={upload}
                                    onChange={e=>setUpload(e.target.value)}
                                />
                                </Col>
                            </Form.Group> */}

                            <label>Planned or completed </label>
                            <select value={status} onChange={e=>setStatus(e.target.value)}>
                                {/* <option disabled>Select status</option> */}
                                <option value="Planned">Planned</option>
                                <option value="Completed">Completed</option>
                            </select>

                            <label>Private or public</label>
                            <select value={publicOrPrivate} onChange={e=>setPublicOrPrivate(e.target.value)}>
                                {/* <option disabled>Select type</option> */}
                                <option value="Private">Private</option>
                                <option value="Public">Public</option>
                            </select>

                            {/* <Form.Group className="mb-3">
                                <Form.Check
                                type="checkbox"
                                name="status"
                                label="Planned"
                                id="status"
                                checked={status}
                                onChange={e=>setStatus(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Check
                                type="checkbox"
                                name="publicOrPrivate"
                                label="Private"
                                id="publicOrPrivate"
                                checked={publicOrPrivate}
                                onChange={e=>setPublicOrPrivate(e.target.value)}
                                />
                            </Form.Group> */}
                            
                            <Button variant="primary" type="submit" md={{ span: 3, offset: 3 }}>
                                Submit
                            </Button>
                        </Form>
                </Card>
            </Col>
        </Row>
    );
}