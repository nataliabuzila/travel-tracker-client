import React, { useState, useParams, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {Card} from 'react-bootstrap';
import { getTrip, updateTrip } from '../utils/api';
import { useNavigate } from "react-router-dom";
import SpinnerLoading from '../components/SpinnerLoading';

export default function TripUpdate () {

    const [loading, setLoading] = useState(true)
    const [trip, setTrip] = useState(null)
    const navigate = useNavigate();
    const {tripId} = useParams()

    //retrieve the trip data from API
    useEffect(() => {
        getTrip(tripId).then((res) => {
            setTrip(JSON.parse(res.data))
            setLoading(false)
        })
    }, [tripId])


    const handleSubmit = (values) => {
        //  console.log (values)
        updateTrip(tripId, values).then((res) => {
            //  console.log("it worked")
            const data = JSON.parse(res.data)
            navigate(`/trips/${data._id}`)
    
        })
    }

    if(loading) return <SpinnerLoading />

    return (
        <Row className="justify-content-center" style={{height: '100%'}}>
            <Col>
                <Card className='create-trip-form' style={{ width: '50rem' }}>
                <Card.Title className="text-center">`Update trip ${trip.title}`</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="title">
                            <Form.Label column sm={2}>
                            Title
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control required type="text" placeholder={trip.title} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="description">
                            <Form.Label column sm={2}>Description</Form.Label>
                            <Col sm={10}>
                            <Form.Control as="textarea" rows={3} placeholder={trip.description}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="country">
                            <Form.Label column sm={2}>
                            Country
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" placeholder={trip.country}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="city">
                            <Form.Label column sm={2}>
                            City
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" placeholder={trip.city} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="position-relative mb-3" controlId="file">
                            <Form.Label column sm={2}>
                            Upload photo
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="file" name="file" placeholder={trip.imageURL}/>
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