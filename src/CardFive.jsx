import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardFive() {
  return (
    <Card className="card1Des" style={{ width: '18rem' }}>
      <Card.Img className="imgDes" variant="top" src="https://i.pinimg.com/736x/da/32/67/da3267e095f3e890891135424d6d53c2.jpg" />
      <Card.Body>
        <Card.Title>Quokka</Card.Title>
        <Card.Text>
        The quokka (/ˈkwɒkə/) (Setonix brachyurus)[4] is a small macropod about the size of a domestic cat.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardFive;