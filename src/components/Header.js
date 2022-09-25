
import {Navbar, Container, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

 
export default function Header() {
  return (
    <Navbar bg="light" expand="lg" className='navbar'>
    <Container>
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/trips">Places and Stories</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
      <LinkContainer to="/login">
        <Button variant="secondary" className='button'>Log in</Button>
      </LinkContainer>
      <LinkContainer to="/signup">
        <Button variant="outline-secondary" className='button'>Sign up</Button>
       </LinkContainer>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
 