import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Overli from './Overli';

function CardOne() {
  return (
    <Card className="card1Des" style={{ width: '18rem' }}>
      <Card.Img className="imgDes" variant="top" src="https://i.pinimg.com/736x/63/e6/5c/63e65c9f222efd5f9a7656c00bd4de1a.jpg" />
      <Card.Body>
        <Card.Title>Dog</Card.Title>
        <Card.Text>
        The dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf.
        <Overli/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardOne;