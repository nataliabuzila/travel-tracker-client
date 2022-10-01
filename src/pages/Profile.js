import { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Button, Nav, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import SpinnerLoading from "../components/SpinnerLoading";
import TripCardPrivate from "../components/TripCardPrivate";
import { AuthContext } from "../context/auth.context";
import { deleteUser, getUserById } from "../utils/api";



export default function Profile() {

    const navigate = useNavigate();
    const {isLoggedIn, user, logOutUser } = useContext(AuthContext)

    const {userId} = useParams();

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // getUserById(user._id).then((response) => { setProfile(response.data) })
        getUserById(userId).then((res) => {
            //console.log(res.data)
             setProfile(JSON.parse(res.data))
            //console.log(profile)
        })
    }, [userId])

    const handleConfirm = () => {
        deleteUser(userId).then(() => {
            //console.log(userId)
            logOutUser();
            navigate("/", {replace: true}) //replace:true doesnt allow user to navigate back to the deleted user page
        })
    }

if(profile 
    // && user._id === userId
     ) {
    return(
        <Container className="p-5 mb-4 bg-light rounded-3" >
        <Row>
          <Col>
            {/* <img src={profile.avatarURL} alt={profile.name}/> */}
            <h3> Hello, {profile.name}!</h3>
            <p>Join date: {new Date(profile.registrationDate).toDateString()}</p>
          </Col>
          <Col>
          <Button variant="outline-secondary" onClick={handleConfirm}>Delete profile</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">My adventures</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/trips/planned">My bucket list</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/trips/completed">Completed trips</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/trips/new">Add trip</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>

                    {profile.trips.map((e) => (
                        <Col key={e._id}>
                            <TripCardPrivate trip={e}/>
                        </Col>

                    ))}
                </Card.Body>
                </Card>
          </Col>
        </Row>
      </Container>
    )
} else {
    return(
        <Container>

            Please log in!!

      </Container>
    )
}
}