import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Overli() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Caldereta
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button className="card1Des" variant="success">Hover me to see the dish</Button>
    </OverlayTrigger>
  );
}

export default Overli;