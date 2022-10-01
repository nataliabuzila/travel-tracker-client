import {Row, Col, Card, Form, Button} from 'react-bootstrap'
import { createReview } from '../utils/api'
import {useNavigate} from "react-router-dom"
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';

const API_URL = "http://localhost:5005/api"

export default function ReviewCreate(props) {

    const navigate = useNavigate();

    const {user} = useContext (AuthContext)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const [publicOrPrivate, setPublicOrPrivate] = useState("Private");

    const handleSubmit = (e) => {
        e.preventDefault();
        // createReview(e).then(()=>{
        //     console.log("success")
        // })
        const {trip, refreshTrip} = props;
        const requestBody = {title, description, publicOrPrivate, trip, owner: user._id}

        axios
        .post(`${API_URL}/reviews`, requestBody)
        .then((response) => {
            // Reset the state to clear the inputs
            console.log(response, " <-REVIEW CREATED")
            setTitle("");
            setDescription("");
            setPublicOrPrivate("Private")
            //navigate(`/trips/${trip}`)
            refreshTrip();
            
        })
        .catch((error) => console.log(error));
    }

    return(
        <Row className="justify-content-center" style={{height: '100%'}}>
            <Col>
                <Card className='create-trip-form' style={{ maxWidth: "700px"}}>
                <Card.Title className="text-center">Add review</Card.Title>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group required as={Row} className="mb-3" controlId="title">
                            <Form.Label column sm={2}>
                            Title
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control required type="text" placeholder="title" 
                                value={title} 
                                onChange={e=>setTitle(e.target.value)}
                            />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="description">
                            <Form.Label column sm={2}>Description</Form.Label>
                            <Col sm={10}>
                            <Form.Control as="textarea" rows={3} placeholder="description"
                                value={description} 
                                onChange={e=>setDescription(e.target.value)}
                            />
                            </Col>
                        </Form.Group>

                        <label>Private or public</label>
                            <select value={publicOrPrivate} onChange={e=>setPublicOrPrivate(e.target.value)}>
                                {/* <option disabled>Select type</option> */}
                                <option value="Private">Private</option>
                                <option value="Public">Public</option>
                            </select>

                        {/* <Form.Group as={Row} className="position-relative mb-3" controlId="file">
                            <Form.Label column sm={2}>
                            Upload photo
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="file" name="file" />
                            </Col>
                        </Form.Group> */}

                        {/* <Form.Group className="mb-3">
                            <Form.Check
                            type="checkbox"
                            name="publicOrPrivate"
                            label="Public"
                            id="publicOrPrivate"
                            />
                        </Form.Group> */}
                        
                        <Button variant="primary" type="submit" md={{ span: 3, offset: 3 }}>
                            Submit
                        </Button>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}