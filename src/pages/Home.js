import { Container } from "react-bootstrap"


export default function Home() {

    // const [trips, setTrips] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     getProjects().then((res) => {
    //         console.log(res.data)
    //     })
    // })

    return (
    <div>
    <Container className="p-5 mb-4 bg-light rounded-3 transbox">
    <div className="transbox-text">
            <h1 className="header ">iTravel</h1>
            <h1>My Travel Tracker</h1>
            <h4>Expand your bucket list, explore your favourite locations and share your adventures.</h4>
    </div>
    </Container>
    
    </div>
    )
}