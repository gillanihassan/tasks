import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./styles.module.css";

function FormSection() {
  return (
    <Container className={`${styles.mainContainer}`}>
      <Row className="align-items-start">
        {/* Left side title */}
        <Col md={4}>
          <h5 className={`${styles.leftColHeading}`}>Company information</h5>
        </Col>
        <Col md={8}>
          <Form>
            <Row className="mb-3">
              <Col sm={12} md={6}>
                <Form.Group controlId="formCompanyName">
                  <Form.Label className={`${styles.formLabel}`}>
                    Company name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className={`${styles.formControl}`}
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6} className="mt-3 mt-md-0">
                <Form.Group controlId="formEnterpriseNumber">
                  <Form.Label className={`${styles.formLabel}`}>
                    Enterprise number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className={`${styles.formControl}`}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formAddress">
                  <Form.Label className={`${styles.formLabel}`}>
                    Address
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className={`${styles.formControl}`}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col sm={12} md={6}>
                <Form.Group controlId="formCity">
                  <Form.Label className={`${styles.formLabel}`}>
                    City
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className={`${styles.formControl}`}
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6} className="mt-3 mt-md-0">
                <Form.Group controlId="formZipCode">
                  <Form.Label className={`${styles.formLabel}`}>
                    ZIP / Postal code
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className={`${styles.formControl}`}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={12} md={6}>
                <Form.Group controlId="formCountry">
                  <Form.Label className={`${styles.formLabel}`}>
                    Country
                  </Form.Label>
                  <Form.Select className={`${styles.formControl}`}>
                    <option></option>
                    <option></option>
                    <option></option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col sm={12} md={6} className="mt-3 mt-md-0">
                <Form.Group controlId="formDvtSector">
                  <Form.Label className={`${styles.formLabel}`}>
                    DVT sector
                  </Form.Label>
                  <Form.Select className={`${styles.formControl}`}>
                    <option></option>
                    <option></option>
                    <option></option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormSection;
