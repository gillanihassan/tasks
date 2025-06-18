import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import styles from "./styles.module.css";
import { useState } from "react";

function BillingSection() {
  const [active, setActive] = useState(1);
  return (
    <Container className={`${styles.mainContainer}`}>
      <Row className="align-items-start">
        {/* Left side title */}
        <Col md={4}>
          <h5 className={`${styles.leftColHeading}`}>Billing</h5>
        </Col>
        <Col md={8}>
          <p className={`${styles.para}`}>
            How many months would you like the license to last?
          </p>
          <ButtonGroup className="mb-3 gap-3">
            <Row>
              <Col sm={12} md={3}>
                <Button
                  className={`px-3 mb-3    ${styles.customBtn} ${
                    active === 1 && styles.active
                  }`}
                  onClick={() => setActive(1)}
                >
                  6 months
                </Button>
              </Col>
              <Col sm={12} md={3}>
                <Button
                  className={`px-3 mb-3  ${styles.customBtn} ${
                    active === 2 && styles.active
                  }`}
                  onClick={() => setActive(2)}
                >
                  12 months
                </Button>
              </Col>
              <Col sm={12} md={3}>
                <Button
                  className={`px-3 mb-3  ${styles.customBtn} ${
                    active === 3 && styles.active
                  }`}
                  onClick={() => setActive(3)}
                >
                  24 months
                </Button>
              </Col>
              <Col sm={12} md={3}>
                <Button
                  className={`px-3 mb-3  ${styles.customBtn} ${
                    active === 4 && styles.active
                  }`}
                  onClick={() => setActive(4)}
                >
                  36 months
                </Button>
              </Col>
            </Row>
          </ButtonGroup>
          <p className={`mt-3 ${styles.para}`}>Invoicing interval</p>
          <ButtonGroup className="gap-3">
            <Row>
              <Col sm={12} md={4}>
                <Button
                  className={`px-3  mb-3  ${styles.customBtn} ${
                    active === 5 && styles.active
                  }`}
                  onClick={() => setActive(5)}
                >
                  3 months
                </Button>
              </Col>
              <Col sm={12} md={4}>
                <Button
                  className={`px-3 mb-3  ${styles.customBtn} ${
                    active === 6 && styles.active
                  }`}
                  onClick={() => setActive(6)}
                >
                  6 months
                </Button>
              </Col>
              <Col sm={12} md={4}>
                <Button
                  className={`px-3 mb-3  ${styles.customBtn} ${
                    active === 7 && styles.active
                  }`}
                  onClick={() => setActive(7)}
                >
                  12 months
                </Button>
              </Col>
            </Row>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default BillingSection;
