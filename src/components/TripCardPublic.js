import {Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function TripCardPublic({trip}) {
    return (
        <Card style={{ maxWidth: "400px" }}>
            <Card.Img variant="top" src={trip.imageURL}/>
            <Card.Body>
                <div>
                    <Card.Title>{trip.title}</Card.Title>
                    <LinkContainer to={`/trips/${trip._id}`}>
                        <Button variant="secondary">Details</Button>
                    </LinkContainer>
                </div>
                <Card.Text>{trip.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">by {trip.owner.name}</small>
            </Card.Footer>
        </Card>
    )
}
