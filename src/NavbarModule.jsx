import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarModule() {
  return (
    <>
      <Navbar className="navDes" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="txtDes" href="#home"><b>Animal Gallery</b></Navbar.Brand>
          <Nav>
            <Nav.Link className="txtDes" href="#home"><b>What they eat</b></Nav.Link>
            <Nav.Link className="txtDes" href="#features"><b>Their abilities</b></Nav.Link>
            <Nav.Link className="txtDes" href="#pricing"><b>Their dish you can cook to</b></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavbarModule;