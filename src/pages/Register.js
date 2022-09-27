import { useNavigate } from "react-router-dom";
import { register } from "../utils/api";
import { Card, Form, Col, Row, Button} from 'react-bootstrap'

export default function Register() {
  const navigate = useNavigate();

// const [name, setName] = useState('')
// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')

const handleSubmit = async (values) => {
  console.log(values)
    //values.preventDefault();
    const res = await register(values);
    //console.log(res.data)
    navigate("/login");
}

  return (
    <Row className="justify-content-center" style={{height: '100%'}}>
      <Col>
        <Card className='create-trip-form' style={{ width: '50rem' }}>
        <Card.Title className="text-center">Sign Up</Card.Title>
            <Form onSubmit={handleSubmit}>
                <Form.Group required as={Row} className="mb-3" controlId="name">
                    <Form.Label column sm={2}>
                    Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control required type="text" placeholder="name" />
                    </Col>
                </Form.Group>

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

                <Form.Group as={Row} className="position-relative mb-3" controlId="file">
                    <Form.Label column sm={2}>
                    Upload photo
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="file" name="file" />
                    </Col>
                </Form.Group>
                
                <Button variant="primary" type="submit" md={{ span: 3, offset: 3 }}>
                    Submit
                </Button>
            </Form>
        </Card>
    </Col>
</Row>

    // <div className="registerUser">
    //     <h5>Sign up</h5>
    //      <form onSubmit={handleSubmit}>
    //         <label>Name: </label>
    //         <input 
    //             type="text" 
    //             name="name" 
    //             value={name}
    //             onChange = {e=>setName(e.target.value)}
    //         />

    //        <label>E-mail: </label>
    //         <input 
    //             type="text" 
    //             name="email" 
    //             value={email}
    //             onChange = {e=>setEmail(e.target.value)}
    //         />

    //        <label>Password: </label>
    //         <input 
    //             type="text" 
    //             name="password" 
    //             value={password}
    //             onChange = {e=>setPassword(e.target.value)}
    //         />

    //         <button className="form-button" type="submit">Submit</button>

    //     </form>
    // </div>
  );
}