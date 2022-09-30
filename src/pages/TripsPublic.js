import { useState, useEffect} from 'react';
import SpinnerLoading from '../components/SpinnerLoading';
import {getTrips} from "../utils/api"
import {Row, Col} from 'react-bootstrap';
import TripCard from '../components/TripCard';
import { useSearchParams } from 'react-router-dom';

export default function TripsPublic() {
    const [trips, setTrips] = useState([])
    const [loading, setLoading] = useState (true);

    // const [searchParams] = useSearchParams();
    // const paramValue = searchParams.get('show')
    
    // const Users = () => {
    //     const [searchParams] = useSearchParams();
      
    //     useEffect(() => {
    //       const currentParams = Object.fromEntries([...searchParams]);
    //       console.log(currentParams); // get new values onchange
    //     }, [searchParams]);
      
    //     return <div>Users</div>;
    //   };


    useEffect (() => {
        getTrips().then((res) => {

            setTrips(JSON.parse(res.data));
            //console.log(res.data)
             setLoading(false);
        })
    }, [])

    if (loading) return <SpinnerLoading />

    return (
        <Row>
            {trips.filter(trip => trip.publicOrPrivate.includes("Public")).map((e) => (
                <Col key={e._id}>
                    <TripCard trip={e} />
                </Col>
            ))}
        </Row>
    )
    
}