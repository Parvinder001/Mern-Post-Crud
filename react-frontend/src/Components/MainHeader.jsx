import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
   <Navbar className="NavbarCustom" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="customePostCrud">Custom Post CRUD&nbsp;&nbsp;&nbsp;&nbsp;|</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="navLink" to="create-post">Add New Post &nbsp;&nbsp;&nbsp;&nbsp;|</Link> 
            <Link className="navLink" to="/">All Posts</Link>
            
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MainHeader;