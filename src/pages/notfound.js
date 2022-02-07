import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container fluid="md" className="mt-5">
      <Row>
        <Col>
          <div>
            <div className="card-body">
              <p className="card-text">
                Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
              </p>
              <p>
                Let's go <Link to="/">home</Link> and try from there.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
