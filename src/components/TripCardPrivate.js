import {Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function TripCardPrivate({trip}) {
    return (
        <Card style={{ maxWidth: "400px" }}>
            <Card.Img variant="top" src={trip.imageURL}/>
            <Card.Body>
                <div>
                    <Card.Title>Title: {trip.title}</Card.Title>
                    <Card.Text>Description: {trip.description} </Card.Text>
                    <Card.Text>Travel timeframe: {new Date(trip.startDate).toDateString()} - {new Date(trip.endDate).toDateString()}</Card.Text>
                    <LinkContainer to={`/trips/${trip._id}`}>
                        <Button variant="secondary">Details</Button>
                    </LinkContainer>
                </div>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Status: {trip.status}</small>
            </Card.Footer>
        </Card>
    )
}