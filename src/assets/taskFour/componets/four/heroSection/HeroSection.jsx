import styles from "./styles.module.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import BirdLogo from "../../../../taskFour/images/heroSection/bird-logo.png";
import HeaderLogo from "../../../../taskFour/images/heroSection/header-logo.png";

const HeroSection = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <Container>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <Image
              src={HeaderLogo}
              style={{ position: "absolute", top: "10px", width: "297px" }}
            />
          </Col>
        </Row>
        <div>
          <Row className=" justify-content-center align-items-center text-center">
            <Col md={6}>
              <Image src={BirdLogo} className={`${styles.customImg}`} />
            </Col>
            <Col md={6} className={styles.colRight}>
              <h3 className={`text-uppercase ${styles.topHeading}`}>
                (and it’s FREE!)
              </h3>
              <div className="d-flex flex-column justify-content-center align-items-center gap-2 mt-3">
                <Button className={`mt-1 ${styles.btn}`}>GET STARTED</Button>
                <Button className={`mt-2 ${styles.btn}`}>
                  I already have an account
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
