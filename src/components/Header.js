
import {Navbar, Container, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContext } from '../context/auth.context'
import { useContext} from 'react'
 
export default function Header() {

  const {isLoggedIn, user } = useContext(AuthContext)

  return (
    <Navbar bg="light" expand="lg" className='navbar'>
    <Container>

      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/trips">Places and Stories</Navbar.Brand> {/* <- only public trips */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar.Collapse>

    {
      isLoggedIn && 
      <>
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="/trips">My adventures</Navbar.Brand> {/* <- all trips of a user*/} {/* */}
          <Navbar.Brand href="/trips">My bucket list</Navbar.Brand> {/* <- all "planned" trips of a user */}
          <Navbar.Brand href="/trips">Completed trips</Navbar.Brand> {/* <- all "completed" trips of a user */}
          <Navbar.Brand href="/trips/new">Add trip</Navbar.Brand> {/* <- add trip */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <LinkContainer to="/logout">
            <Button variant="secondary" className='button'>Log out</Button>
          </LinkContainer>
        </Navbar.Collapse>
      </>
    }

    {
      !isLoggedIn &&
      <>
        <Navbar.Collapse className="justify-content-end">
          <LinkContainer to="/login">
            <Button variant="secondary" className='button'>Log in</Button>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Button variant="outline-secondary" className='button'>Sign up</Button>
          </LinkContainer>
        </Navbar.Collapse>
      </>
    }

    </Container>
  </Navbar>
  );
}
 