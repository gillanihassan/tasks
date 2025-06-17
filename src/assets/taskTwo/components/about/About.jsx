import styles from "./styles.module.css";
import { Button, Col, Row } from "react-bootstrap";

function About() {
  return (
    <div className={`p-5 ${styles.mainDiv}`}>
      <Row>
        <Col
          md={8}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <h2 className={`${styles.mainHeading}`}>
              Enough about us. Let’s talk about you.
            </h2>
            <p className={`mt-3 ${styles.customPara}`}>
              Are you ready to take the next step in the Amazon world?
            </p>
          </div>
        </Col>
        <Col
          md={4}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <Button className={` ${styles.btn}`}>CONTACT US</Button>
        </Col>
      </Row>
    </div>
  );
}

export default About;
