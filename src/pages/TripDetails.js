import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SpinnerLoading from '../components/SpinnerLoading'
import { getTrip, deleteTrip } from '../utils/api';
import { Card, Accordion, Button } from 'react-bootstrap';
import ReviewCreate from "../pages/ReviewCreate"


export default function TripDetails() {

    const { tripId } = useParams();
    const {trip, setTrip} = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();


    useEffect (() => {
        getTrip(tripId).then((res) =>{
            setTrip(JSON.parse(res.data));
            setLoading(false)
        })
    }, [tripId])

    const handleConfirm = () => {
        deleteTrip(tripId).then(() => {
            navigate("/", {replace: true}) //replace:true doesnt allow user to navigate back to the page of the deleted trip 
        })
    }

    if(loading) return <SpinnerLoading />;

    return (
        <div>
        <Card>
            <Card.Img variant="top" src={trip.imageURL} />
            <Card.Body>
                <div>
                    <Card.Title>{trip.title}</Card.Title>
                    <Button variant="outline-primary" onClick={() => navigate(`/trips/${trip._id}/edit`)}>Edit</Button>
                    <Button variant="outline-danger" onClick={handleConfirm}>Delete</Button>
                </div>

                <Card.Text> Country: {trip.country}, City: {trip.city} </Card.Text>
                <Card.Text> Start date: {trip.startDate}, End date: {trip.endDate} </Card.Text>
                <Card.Text> Status: {trip.status}, Type: {trip.publicOrPrivate} </Card.Text>
                <Card.Text>{trip.description}</Card.Text>

                {trip.reviews.length > 0 && 
                    <Accordion>
                        {trip.reviews.map((e) => (
                            <Accordion.Item eventKey={e._id}>
                                <Accordion.Header>Review: {e.title}</Accordion.Header>
                                <Accordion.Body>{e.description}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>}

            </Card.Body>
        </Card>

        <ReviewCreate />

        </div>
    )
}