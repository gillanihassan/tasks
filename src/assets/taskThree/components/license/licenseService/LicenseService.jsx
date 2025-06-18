import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { useState } from "react";
import styles from "./styles.module.css";

function LicenseService() {
  const [selected, setSelected] = useState("course");

  const services = [
    {
      id: "course",
      title: "Course library",
      description: "20 tailored scenarios, based on customer input",
      price: "+ NOK 500",
    },
    {
      id: "module",
      title: "Another module",
      description: "20 tailored scenarios, based on customer input",
      price: "+ NOK 500",
    },
  ];

  return (
    <Container className={`${styles.mainContainer}`}>
      <Row className="align-items-start">
        <Col md={4}>
          <h5 className={`${styles.leftColHeading}`}>Additional services</h5>
        </Col>
        <Col md={8}>
          <Row className="g-3">
            {services.map((item) => (
              <Col xs={12} key={item.id}>
                <Card
                  onClick={() => setSelected(item.id)}
                  className={`d-flex flex-row align-items-center justify-content-between p-3  ${
                    selected === item.id
                      ? styles.activeCard
                      : styles.inactiveCard
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <div className="d-flex align-items-start">
                    <Form.Check
                      type="checkbox"
                      checked={selected === item.id}
                      onChange={() => setSelected(item.id)}
                      className={`me-3 mt-1 p-2 ${styles.customCheckbox}`}
                    />
                    <div>
                      <div className={`${styles.cardTitle}`}>{item.title}</div>
                      <div className={`${styles.cardDescription}`}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.cardPrice}`}>{item.price}</div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default LicenseService;
