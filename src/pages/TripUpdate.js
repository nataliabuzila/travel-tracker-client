import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {Card} from 'react-bootstrap';
import { getTrip, updateTrip } from '../utils/api';
import { useNavigate, useParams } from "react-router-dom";
import SpinnerLoading from '../components/SpinnerLoading';

export default function TripUpdate () {

    const [loading, setLoading] = useState(true)
    const [trip, setTrip] = useState(null)
    const navigate = useNavigate();
    const {tripId} = useParams()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    // const [upload, setUpload] = useState();
    const [status, setStatus] = useState("Planned")
    const [publicOrPrivate, setPublicOrPrivate] = useState("Private")


    //retrieve the trip data from API
    useEffect(() => {
        getTrip(tripId).then((res) => {
            setTrip(JSON.parse(res.data))
            //console.log(res.data)
            setLoading(false)
        })
    }, [tripId])


    const handleSubmit = (e) => {
        //console.log (e)
        e.preventDefault();
        updateTrip(tripId, {title, description, country, city, startDate, endDate, status, publicOrPrivate}).then((res) => {
            //  console.log("it worked")
            const data = JSON.parse(res.data);
            console.log(data , " data")
            navigate(`/trips/${data._id}`)
    
        })
    }

    if(loading) return <SpinnerLoading />

    return (
        <Row className="justify-content-center" style={{height: '100%'}}>
            <Col>
                <Card className='create-trip-form' style={{ width: '50rem' }}>
                    <Card.Title className="text-center">Update trip {trip.title}</Card.Title>
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
                            <Form.Control as="textarea" rows={3} placeholder={trip.description}
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
                            <Form.Control type="text" placeholder={trip.country}
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
                            <Form.Control type="text" placeholder={trip.city} 
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

                            <label>Planned or completed </label>
                            <select value={status} onChange={e=>setStatus(e.target.value)}>
                                <option value="Planned">Planned</option>
                                <option value="Completed">Completed</option>
                            </select>

                            <label>Private or public</label>
                            <select value={publicOrPrivate} onChange={e=>setPublicOrPrivate(e.target.value)}>
                                <option value="Private">Private</option>
                                <option value="Public">Public</option>
                            </select>
                        
                        <Button variant="primary" type="submit" md={{ span: 3, offset: 3 }}>
                            Submit
                        </Button>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
}