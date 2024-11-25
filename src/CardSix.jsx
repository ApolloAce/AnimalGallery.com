import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardSix() {
  return (
    <Card className="card1Des" style={{ width: '18rem' }}>
      <Card.Img className="imgDes" variant="top" src="https://i.pinimg.com/736x/26/55/91/265591b9b8579ed0b9da6fa3d1f2ab63.jpg" />
      <Card.Body>
        <Card.Title>Hamster</Card.Title>
        <Card.Text>
        Hamsters are rodents (order Rodentia) belonging to the subfamily Cricetinae, which contains 19 species classified in seven genera.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardSix;