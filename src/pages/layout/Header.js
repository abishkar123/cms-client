import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

export const Header =()=> {
  return (
    <Navbar bg="success" expand="md">
      <Container>
        <Navbar.Brand href="/">Admin-CMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className='nav-link'>login <i class="fa-solid fa-house"></i></Link>
            <Link to="/register" className='nav-link'>Sign Up <i class="fa-solid fa-user"></i></Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

