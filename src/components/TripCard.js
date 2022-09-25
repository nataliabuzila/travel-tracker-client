import {Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function TripCard({trip}) {
    return (
        <Card>
            <Card.Img variant="top" src={trip.imageURL}/>
            <Card.Body>
                <Card.Title>{trip.title}</Card.Title>
                <Card.Text>{trip.description}</Card.Text>
                <LinkContainer to={`/trips/${trip._id}`}>
                    <Button variant="secondary">Details</Button>
                </LinkContainer>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">by {trip.owner.name}</small>
            </Card.Footer>
        </Card>
    )
}
