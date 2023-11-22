import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainHeader() {
  return (
   <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="create-post">Add New Post</Nav.Link>
            <Nav.Link href="#features">All Posts</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MainHeader;