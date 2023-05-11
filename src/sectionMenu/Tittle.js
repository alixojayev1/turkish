import '../sectionMenu/Tittle.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
function Tittle() {
  return (
    <Container className='tittle_button'>
      <h2 className='regular'>Our Regular Menu Pack</h2>
      <div className='menu_button'>

        <Button className='tittel_btn' variant="secondary">All</Button>{' '}
        <Button className='tittel_btn' variant="secondary">Shawarma</Button>{' '}
        <Button className='tittel_btn' variant="secondary">Turk Kebab</Button>{' '}
        <Button className='tittel_btn' variant="secondary">Hamburger Kebab</Button>{' '}
        <Button className='tittel_btn' variant="secondary">Doner kebab</Button>{' '}
        <Button className='tittel_btn' variant="secondary">Shish kebab</Button>{' '}
        <Button className='tittel_btn' variant="secondary">French fries Pizza</Button>{' '}
        <Button className='tittel_btn' variant="secondary">Desserts</Button>{' '}


      </div>
    </Container>
  );
}

export default Tittle;


