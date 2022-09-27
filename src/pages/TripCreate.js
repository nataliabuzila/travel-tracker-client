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

    const [date, setDate] = useState('')

    const handleSubmit = (values) => {
        //  console.log (values)
        createTrip(values).then((res) => {
            //  console.log("it worked")
            const data = JSON.parse(res.data)
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
                            <Form.Control required type="text" placeholder="title" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="description">
                            <Form.Label column sm={2}>Description</Form.Label>
                            <Col sm={10}>
                            <Form.Control as="textarea" rows={3} placeholder="description"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="country">
                            <Form.Label column sm={2}>
                            Country
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" placeholder="country" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="city">
                            <Form.Label column sm={2}>
                            City
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" placeholder="city" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="startDate">
                            <Form.Label column sm={2}>
                            Start date
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="date" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="endDate">
                            <Form.Label column sm={2}>
                            End date
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="date" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="position-relative mb-3" controlId="file">
                            <Form.Label column sm={2}>
                            Upload photo
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="file" name="file" />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check
                            type="checkbox"
                            name="status"
                            label="Completed"
                            id="status"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check
                            type="checkbox"
                            name="publicOrPrivate"
                            label="Public"
                            id="publicOrPrivate"
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