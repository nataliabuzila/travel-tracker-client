import { Spinner, Container, Row, Col} from "react-bootstrap";

export default function SpinnerLoading() {
    return (
        <Row className="justify-content-md-center" style={{height: "100%"}}>

            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>

        </Row>

      );
}