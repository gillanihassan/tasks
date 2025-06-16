import styles from "./styles.module.css";
import { Button, Col, Image, Row } from "react-bootstrap";
import HeroImage from "../.././../assets/images/heroSection/HeroImage.png";

function HeroSection() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <Row>
        <Col md={7}>
          <h2>Unlock Your True Potential For Free!</h2>
          <p>
            Discover scientifically-backed tools to boost your personal growth,
            completely free of charge.
          </p>
          <Button variant="success">Join For Free</Button>
          <Button variant="warning">Already Have an Account</Button>
        </Col>
        <Col md={5}>
          <Image src={HeroImage} />
        </Col>
      </Row>
    </div>
  );
}

export default HeroSection;
