import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./styles.module.css";
import FlagImage from "../../../../taskThree/images/contactForm/flag-img.png";

function ContactForm() {
  return (
    <Container className={`${styles.mainContainer}`}>
      <Row className="align-items-start">
        {/* Left side title */}
        <Col md={4}>
          <h5 className={`${styles.leftColHeading}`}>Contact person</h5>
        </Col>
        <Col md={8}>
          <Form>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label className={`${styles.formLabel}`}>
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className={`${styles.formControl}`}
              />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label className={`${styles.formLabel}`}>
                Phone number
              </Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  type="tel"
                  placeholder="+47"
                  className={`${styles.formControlOne}`}
                />
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
