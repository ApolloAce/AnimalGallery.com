import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardThree() {
  return (
    <Card className="card1Des" style={{ width: '18rem' }}>
      <Card.Img className="imgDes" variant="top" src="https://i.pinimg.com/736x/95/74/27/957427537a488187d3732cbd2912aaea.jpg" />
      <Card.Body>
        <Card.Title>Snake</Card.Title>
        <Card.Text>
        Snakes are elongated, limbless reptiles of the suborder Serpentes (/sɜːrˈpɛntiːz/).
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardThree;