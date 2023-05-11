import '../secction/Section1.css';



import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import navbarImg from '../proectImg/shashlik.png';
import navbarIcon from '../proectImg/star.svg';

function Section1() {
    return (
        <Container className='section_menu' >
            <div className='tittle'>
                Popular Dishes
            </div>
            <Row xs={1} md={4} className="g-4">

                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>

                        <Card>
                            <img src={navbarImg} />
                            <Card.Body>
                                <Card.Title>Barbecue Shish kebab Shashlik Skewer</Card.Title>
                                <img src={navbarIcon} />
                                <Card.Text>
                                    $12.00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Section1;


