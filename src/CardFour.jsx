import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardFour() {
  return (
    <Card className="card1Des" style={{ width: '18rem' }}>
      <Card.Img className="imgDes" variant="top" src="https://i.pinimg.com/736x/75/f4/59/75f459b006900fea5e5a92476d3ca37e.jpg" />
      <Card.Body>
        <Card.Title>Red Panda</Card.Title>
        <Card.Text>
        The red panda (Ailurus fulgens), also known as the lesser panda, is a small mammal native to the eastern Himalayas and southwestern China.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardFour;