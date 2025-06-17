import styles from "./styles.module.css";
import { Button, Col, Image, Row } from "react-bootstrap";
import HeroImage from "../.././../taskOne/images/heroSection/HeroImage.png";

function HeroSection() {
  return (
    <div className={`container-xxl   ${styles.mainDiv}`}>
      <Row>
        <Col md={7} className="d-flex flex-column justify-content-center ">
          <h2 className={` ${styles.topHeading}`}>
            Unlock Your True Potential For Free!
          </h2>
          <p className={`mt-1  ${styles.customPara}`}>
            Discover scientifically-backed tools to boost your personal growth,
            completely free of charge.
          </p>
          <div className={`mt-4 ${styles.buttonDiv}`}>
            <Row className="g-2">
              <Col xs={12} md="auto">
                <Button className={` px-4 ${styles.btnOne}`}>
                  Join For Free
                </Button>
              </Col>
              <Col xs={12} md="auto">
                <Button className={` px-3 ${styles.btnTwo}`}>
                  Already Have an Account
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={5} className="text-end text-md-center">
          <Image src={HeroImage} className={`${styles.customImage}`} />
        </Col>
      </Row>
    </div>
  );
}

export default HeroSection;
