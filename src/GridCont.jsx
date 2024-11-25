import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';
import CardFour from './CardFour';
import CardFive from './CardFive';
import CardSix from './CardSix';
import CardSeven from './CardSeven';
import CardEight from './CardEight';
import CardNine from './CardNine';
import CardTen from './CardTen';

function GridCont() {
  return (
    <Container className="contDes"> 
      <Row>
        <Col className = "colDes" xs={12} md={6} lg={4}><CardOne/></Col>
        <Col className = "colDes" xs={12} md={6} lg={4}><CardTwo/></Col>
        <Col className = "colDes" xs={12} md={6} lg={4}><CardThree/></Col>
        <Col className = "colDes" xs={12} md={6} lg={4}><CardFour/></Col>
        <Col className = "colDes" xs={12} md={6} lg={4}><CardFive/></Col>
        <Col className = "colDes" xs={12} md={6} lg={4}><CardSix/></Col>
        <Col className = "colDes" xs={12} md={6} lg={4}><CardSeven/></Col>
        <Col className = "colDes" xs={12} md={6} lg={4}><CardEight/></Col>
        <Col className = "colDes" xs={12} md={6} lg={4}><CardNine/></Col>
        <Col className = "colDes" xs={12} md={6} lg={4}><CardTen/></Col>
      </Row>
    </Container>
  );
}

export default GridCont;