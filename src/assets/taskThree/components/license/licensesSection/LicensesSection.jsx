import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./styles.module.css";

function LicensesSection() {
  return (
    <Container className={`${styles.mainContainer}`}>
      <Row className="align-items-start">
        {/* Left side title */}
        <Col md={4}>
          <h5 className={`${styles.leftColHeading}`}>Licenses</h5>
        </Col>
        <Col md={8}>
          <Form.Group className="mb-4">
            <Form.Label className={`${styles.formLable}`}>
              How many licenses do you need?
            </Form.Label>

            <Row>
              <Col md={6}>
                <Form.Control
                  type="number"
                  placeholder="Enter number"
                  defaultValue={20}
                  className={`${styles.formControl}`}
                />
              </Col>
              <Col md={6} className="">
                <p className={`${styles.rightColPara}`}>
                  NOK <span className={`${styles.rightColSpan}`}>200</span>{" "}
                  <span className={`${styles.rightColSpanTwo}`}>
                    / per month
                  </span>
                </p>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Form.Label className={`${styles.formLable}`}>
              Email addresses of the people that will receive a license,
              separate emails with a comma (,)
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="e.g. kari.nordmann@mail.no, ola.nordmann@mail.no"
              className={`${styles.formControlTwo}`}
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default LicensesSection;
