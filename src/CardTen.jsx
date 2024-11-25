import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardTen() {
  return (
    <Card className="card1Des" style={{ width: '18rem' }}>
      <Card.Img className="imgDes" variant="top" src="https://i.pinimg.com/736x/7f/96/31/7f9631cc6d21c85f4b29926608f4017d.jpg" />
      <Card.Body>
        <Card.Title>Orca</Card.Title>
        <Card.Text>
        The orca (Orcinus orca), or killer whale, is a toothed whale and the largest member of the oceanic dolphin family.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardTen;