import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SpinnerLoading from '../components/SpinnerLoading'
import { getTrip } from '../utils/api';
import { Card, Accordion } from 'react-bootstrap';



export default function TripDetailsPublic() {

    const { tripId } = useParams();
    const [trip, setTrip] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect (() => {
        const refreshTrip = () => {
            getTrip(tripId).then((res) =>{
                setTrip(JSON.parse(res.data));
                setLoading(false)
            })
        }
        refreshTrip();
    }, [tripId])


    if(loading) return <SpinnerLoading />;

    return (
        <div>
        <Card style={{ maxWidth: "700px" }}>
            <Card.Img variant="top" src={trip.imageURL} />
            <Card.Body>
                <div>
                    <Card.Title>{trip.title}</Card.Title>
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


        </div>
    )
}