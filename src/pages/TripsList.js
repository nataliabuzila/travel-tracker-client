import { useState, useEffect} from 'react';
import SpinnerLoading from '../components/SpinnerLoading';
import {getTrips} from "../utils/api"
import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import TripCard from '../components/TripCard';


export default function TripsList() {
    const [trips, setTrips] = useState([])
    const [loading, setLoading] = useState (true);

    useEffect (() => {
        getTrips().then((res) => {

            setTrips(JSON.parse(res.data));
            console.log(res.data)
             setLoading(false);
        })
    }, [])

    if (loading) return <SpinnerLoading />

    return (
        <Row>
                {trips.map((e) => (
                    <Col key={e._id}>
                        <TripCard trip={e} />
                        {/* <Card>
                            <Card.Img variant="top" src={e.imageURL}/>
                            <Card.Body>
                                <Card.Title>{e.title}</Card.Title>
                                <Card.Text>{e.description}</Card.Text>
                                 <LinkContainer to={`/trips/${e._id}`}>
                                     <Button variant="secondary">Details</Button>
                                 </LinkContainer>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">by {e.owner.name}</small>
                            </Card.Footer>
                        </Card> */}
                    </Col>
                ))}
        </Row>
    )
    
}
