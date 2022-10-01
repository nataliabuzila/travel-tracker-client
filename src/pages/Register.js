import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import { register } from "../utils/api";
import { Card, Form, Col, Row, Button} from 'react-bootstrap'
import axios from 'axios';

const API = "https://busy-pear-puppy-kilt.cyclic.app/api"

export default function Register() {
  const navigate = useNavigate();

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [errorMessage, setErrorMessage] = useState(undefined);

const handleSignupSubmit = async (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = {name, email, password};
    axios.post(`${API}/auth/signup`, requestBody)
    .then((response) => navigate("/login"))
    //If the request generates an error response, set the error description from the response as the error message
    .catch((error) => {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    })
}

  return (
    <Row className="justify-content-center" style={{height: '100%'}}>
      <Col>
        <Card className='create-trip-form' style={{ width: '50rem' }}>
        <Card.Title className="text-center">Sign Up</Card.Title>
            <Form onSubmit={handleSignupSubmit}>
                <Form.Group required as={Row} className="mb-3" controlId="name">
                    <Form.Label column sm={2}>
                    Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control required type="text" placeholder="name" 
                        value={name} 
                        onChange={e=>setName(e.target.value)}
                    />
                    </Col>
                </Form.Group>

                <Form.Group required as={Row} className="mb-3" controlId="email">
                  <Form.Label column sm={2}>
                  Email
                  </Form.Label>
                  <Col sm={10}>
                  <Form.Control type="email" placeholder="name@example.com" 
                      value={email} 
                      onChange={e=>setEmail(e.target.value)}
                  />
                  </Col>
                </Form.Group>

                <Form.Group required as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="password" placeholder="Password" 
                      value={password} 
                      onChange={e=>setPassword(e.target.value)}
                    />
                  </Col>
                </Form.Group>

                {/* <Form.Group as={Row} className="position-relative mb-3" controlId="file">
                    <Form.Label column sm={2}>
                    Upload photo
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="file" name="file" />
                    </Col>
                </Form.Group> */}
                
                <Button variant="primary" type="submit" md={{ span: 3, offset: 3 }}>
                  Sign Up
                </Button>

                { errorMessage && <p className="error-message">{errorMessage}</p> }

                <p>Already have account?</p>
                <Button variant="link" href="/login">Log In</Button>

            </Form>
        </Card>
    </Col>
</Row>


  );
}