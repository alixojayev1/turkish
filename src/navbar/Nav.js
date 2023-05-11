
import '../navbar/Nav.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import navImg from '../proectImg/kfs1.png'


function Navbar1() {
  return (
    <Nav className='nav-color '>
      <Container className='conatiner  '>
       
        <Card className='card-none' style={{ width: '500px' }}>
          <Card.Body>
            <Card.Title className='flavour'>Chase the new Flavour</Card.Title>
            <Card.Title className='fine'>The key to Fine dining</Card.Title>
            <Card.Text className='tellus'>
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
            </Card.Text>
            <Button className='nav-button'>
              Explore Menu
            </Button>
          </Card.Body>
        </Card>
        <div className='nav_img'>
          <img src={navImg} />
          
        </div>
      </Container>
    </Nav>


  );
}

export default Navbar1;