import {Row, Col, Card, Form, Button} from 'react-bootstrap'
import { createReview } from '../utils/api'
import {useNavigate} from "react-router-dom"

export default function ReviewCreate() {

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log(values)
        createReview(values).then(()=>{
            console.log("success")
            //should I add the created review to the trip array?
        })
    }

    return(
        <Row className="justify-content-center" style={{height: '100%'}}>
            <Col>
                <Card className='create-trip-form' style={{ width: '50rem' }}>
                <Card.Title className="text-center">Add review</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="title">
                            <Form.Label column sm={2}>
                            Title
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control required type="text" placeholder="title" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="description">
                            <Form.Label column sm={2}>Description</Form.Label>
                            <Col sm={10}>
                            <Form.Control as="textarea" rows={3} placeholder="description"/>
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

                        <Form.Group className="mb-3">
                            <Form.Check
                            type="checkbox"
                            name="publicOrPrivate"
                            label="Public"
                            id="publicOrPrivate"
                            />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" md={{ span: 3, offset: 3 }}>
                            Submit
                        </Button>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}