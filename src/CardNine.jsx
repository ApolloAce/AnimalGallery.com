import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardNine() {
  return (
    <Card className="card1Des" style={{ width: '18rem' }}>
      <Card.Img className="imgDes" variant="top" src="https://i.pinimg.com/736x/5e/36/6b/5e366b8dd6815cf873a83048ecc7a71f.jpg" />
      <Card.Body>
        <Card.Title>Philippine Eagle</Card.Title>
        <Card.Text>
        The Philippine eagle (Pithecophaga jefferyi), also known as the monkey-eating eagle or great Philippine eagle, is a critically endangered species of eagle of the family Accipitridae which is endemic to forests in the Philippines.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardNine;