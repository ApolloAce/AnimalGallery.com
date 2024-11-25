import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardEight() {
  return (
    <Card className="card1Des" style={{ width: '18rem'}}>
      <Card.Img className="imgDes" variant="top" src="https://i.pinimg.com/736x/d8/d9/f8/d8d9f8689a853b225900c44aed736cab.jpg" />
      <Card.Body>
        <Card.Title>Cheetah</Card.Title>
        <Card.Text>
        The cheetah (Acinonyx jubatus) is a large cat and the fastest land animal.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardEight;