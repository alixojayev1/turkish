import '../header/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navbarImg from '.././proectImg/navbaricon.svg';
import  Button  from 'react-bootstrap/Button';




function Header1() {
  return (
    <Navbar className='navbar_color'  expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={navbarImg}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 ">
            <Nav.Link  href="#home">Menu</Nav.Link>
            <Nav.Link  href="#link">News</Nav.Link>
            <Nav.Link  href="#link">About Us </Nav.Link>
            <Nav.Link  href="#link">Contact Us</Nav.Link>
          </Nav>
          <Button className='nav_button '>
            Login
          </Button>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Header1;