import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {Card} from 'react-bootstrap';
import { createTrip } from '../utils/api';

import { useNavigate } from "react-router-dom";

export default function TripCreate () {

    const navigate = useNavigate();

 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    // const [upload, setUpload] = useState();
    const [status, setStatus] = useState("planned")
    const [publicOrPrivate, setPublicOrPrivate] = useState("private")

    const handleSubmit = (e) => {
        //  console.log (values)
        e.preventDefault();
        createTrip(e).then((res) => {
        //  console.log("it worked")
        const data = res.data;
        navigate(`/trips/${data._id}`)
        })
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

                            <Form.Group className="mb-3">
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
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" md={{ span: 3, offset: 3 }}>
                                Submit
                            </Button>
                        </Form>
                </Card>
            </Col>
        </Row>
    );
}