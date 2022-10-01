import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SpinnerLoading from '../components/SpinnerLoading'
import { getTrip, deleteTrip } from '../utils/api';
import { Card, Accordion, Button } from 'react-bootstrap';
import ReviewCreate from "../pages/ReviewCreate"
import { AuthContext } from '../context/auth.context';



export default function TripDetails() {

    const { tripId } = useParams();
    const [trip, setTrip] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    const {user, isLoggedIn} = useContext (AuthContext)

    const refreshTrip = () => {
        getTrip(tripId).then((res) =>{
            setTrip(JSON.parse(res.data));
            setLoading(false)
        })
    }
    useEffect (() => {
        refreshTrip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tripId])

    const handleConfirm = () => {
        deleteTrip(tripId, user._id).then(() => {
            console.log(tripId, user._id)
            navigate("/", {replace: true}) //replace:true doesnt allow user to navigate back to the page of the deleted trip 
        })
    }

    if(loading) return <SpinnerLoading />;

    return (
        <div>
        <Card style={{ maxWidth: "700px" }}>
            <Card.Img variant="top" src={trip.imageURL} />
            <Card.Body>
                <div>
                    <Card.Title>{trip.title}</Card.Title>
                    {isLoggedIn &&
                    <>
                        <Button variant="outline-primary" onClick={() => navigate(`/trips/${trip._id}/edit`)}>Edit</Button>
                        <Button variant="outline-danger" onClick={handleConfirm}>Delete</Button>
                    </>
                    }
                    
                </div>

                <Card.Text> Country: {trip.country}, City: {trip.city} </Card.Text>
                <Card.Text> Start date: {new Date(trip.startDate).toDateString()}, End date: {new Date(trip.endDate).toDateString()} </Card.Text>
                <Card.Text> Status: {trip.status}, Type: {trip.publicOrPrivate} </Card.Text>
                <Card.Text>Description: {trip.description}</Card.Text>

                {trip.reviews.length > 0 && 
                    <Accordion>
                        {trip.reviews.map((e) => (
                            <Accordion.Item eventKey={e._id} key={e._id}>
                                <Accordion.Header>Review: {e.title}</Accordion.Header>
                                <Accordion.Body>{e.description}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>}

            </Card.Body>
        </Card>

        {isLoggedIn &&
         <ReviewCreate refreshTrip={refreshTrip} trip={tripId}/>
        }

        </div>
    )
}