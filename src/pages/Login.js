import { useNavigate } from "react-router-dom";
import { login } from "../utils/api";
import { Card, Form, Col, Row, Button} from 'react-bootstrap'
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from 'axios';

const API = "https://busy-pear-puppy-kilt.cyclic.app/api"

export default function Login() {

const navigate = useNavigate();
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [errorMessage, setErrorMessage] = useState(undefined);

const {storeToken, authenticateUser} = useContext(AuthContext);

const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // const res = await login(values);

    const requestBody = {email, password};
    axios.post(`${API}/auth/login`, requestBody)
    .then((res)=> {
      console.log('JWT token ', res.data.token)
      // Save the token in the localStorage
      storeToken(res.data.token);
      // Verify the token by sending a request to the server's JWT validation endpoint.
      authenticateUser();
      //console.log(res.data.user._id)
      navigate('/');   //MUST UPDATE to user profile page
    })
    .catch((error) => {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    })
}


    // storeToken(JSON.parse(res.data).token);
    // await authenticateUser()
    // navigate("/"); 

  return (
        <Row className="justify-content-center" style={{height: '100%'}}>
        <Col>
            <Card className='create-trip-form' style={{ width: '50rem' }}>
            <Card.Title className="text-center">Sign In</Card.Title>
                <Form onSubmit={handleLoginSubmit}>

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
                    
                    <Button variant="primary" type="submit" md={{ span: 3, offset: 3 }}>
                        Submit
                    </Button>

                    { errorMessage && <p className="error-message">{errorMessage}</p> }

                    <p>Don't have an account yet?</p>
                    <Button variant="link" href="/signup">Sign Up</Button>
                </Form>
            </Card>
        </Col>
    </Row>
  );
}