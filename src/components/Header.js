
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContext } from '../context/auth.context'
import { useContext} from 'react'
import { useNavigate } from 'react-router-dom';
 
export default function Header() {

  const {isLoggedIn, user, logOutUser } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <Navbar bg="light" expand="lg" className='navbar' sticky="top">
    <Container>

      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav.Link href="/trips/public">Places and Stories</Nav.Link> {/* <- only public trips */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar.Collapse>

    {isLoggedIn && 
      <>

        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          {/* <Nav.Link href="/trips">My adventures</Nav.Link> <- all trips of a user  */}
          {/* <Nav.Link href="/trips/planned">My bucket list</Nav.Link> <- all "planned" trips of a user */}
          {/* <Nav.Link href="/trips/completed">Completed trips</Nav.Link> <- all "completed" trips of a user */}
          {/* <Nav.Link href="/trips/new">Add trip</Nav.Link> */}
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* </Navbar.Collapse> */}

        <Navbar.Collapse className="justify-content-end">
            <Button 
              variant="secondary" 
              className='button'
              onClick=
              { async () => {
                await logOutUser();
                navigate("/");
              }}
            >
              Log out
            </Button>
            <Nav.Link href={`/profile/${user._id}`}>Profile</Nav.Link>
        </Navbar.Collapse>
      </>
    }

    {!isLoggedIn &&
      <>
        <Navbar.Collapse className="justify-content-end">
          <LinkContainer to="/login">
            <Button variant="secondary" className='button'>Log in</Button>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Button variant="outline-secondary" className='button'>Sign Up</Button>
          </LinkContainer>
        </Navbar.Collapse>
      </>
    }

    </Container>
  </Navbar>
  );
}
 