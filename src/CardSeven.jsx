import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardSeven() {
  return (
    <Card className="card1Des" style={{ width: '18rem' }}>
      <Card.Img className="imgDes" variant="top" src="https://i.pinimg.com/736x/54/eb/88/54eb884d4f6caf5318f43ab31e2a40e2.jpg" />
      <Card.Body>
        <Card.Title>Hummingbird</Card.Title>
        <Card.Text>
        Hummingbirds are birds native to the Americas and comprise the biological family Trochilidae.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardSeven;