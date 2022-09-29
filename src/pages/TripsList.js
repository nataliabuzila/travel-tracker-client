import { useState, useEffect} from 'react';
import SpinnerLoading from '../components/SpinnerLoading';
import {getTrips} from "../utils/api"
import {Row, Col} from 'react-bootstrap';
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
                </Col>
            ))}
        </Row>
    )
    
}
