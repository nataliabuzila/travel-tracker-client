import { useNavigate } from "react-router-dom";
import { login } from "../utils/api";
import { Card, Form, Col, Row, Button} from 'react-bootstrap'
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export default function Login() {
const navigate = useNavigate();
const {storeToken, authenticateUser} = useContext(AuthContext);

const handleSubmit = async (values) => {
  console.log(values)
    //values.preventDefault();
    const res = await login(values);
    console.log(res.data);
    storeToken(JSON.parse(res.data).token);
    await authenticateUser()
    navigate("/"); //MUST UPDATE to user profile page
}

  return (
        <Row className="justify-content-center" style={{height: '100%'}}>
        <Col>
            <Card className='create-trip-form' style={{ width: '50rem' }}>
            <Card.Title className="text-center">Sign In</Card.Title>
                <Form onSubmit={handleSubmit}>

                    <Form.Group required as={Row} className="mb-3" controlId="email">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="name@example.com" />
                    </Col>
                    </Form.Group>

                    <Form.Group required as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" md={{ span: 3, offset: 3 }}>
                        Submit
                    </Button>
                </Form>
            </Card>
        </Col>
    </Row>
  );
}