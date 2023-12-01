import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainHeader() {
  return (
   <Navbar className="NavbarCustom" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="customePostCrud">Custom Post CRUD&nbsp;&nbsp;&nbsp;&nbsp;|</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="navLink" href="create-post">Add New Post &nbsp;&nbsp;&nbsp;&nbsp;|</Nav.Link> 
            <Nav.Link className="navLink" href="/">All Posts</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MainHeader;