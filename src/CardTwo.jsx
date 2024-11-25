import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardTwo() {
  return (
    <Card className="card1Des" style={{ width: '18rem' }}>
      <Card.Img className= "imgDes" variant="top" src="https://i.pinimg.com/736x/26/c7/35/26c7355fe46f62d84579857c6f8c4ea5.jpg" />
      <Card.Body>
        <Card.Title>Cat</Card.Title>
        <Card.Text>
        The cat (Felis catus), also referred to as domestic cat or house cat, is a small domesticated carnivorous mammal.
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default CardTwo;