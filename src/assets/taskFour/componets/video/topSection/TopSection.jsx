import styles from "./styles.module.css";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  ButtonGroup,
} from "react-bootstrap";
import VideoLogo from "../../../../taskFour/images/video/topSection/video-img.png";
import HeaderLogo from "../../../../taskFour/images/heroSection/header-logo.png";
import { useState } from "react";

function TopSection() {
  const [active, setActive] = useState(6);

  return (
    <div className={` ${styles.mainContainer}`}>
      <Container className="px-3 px-md-0">
        <Col md={6} className="d-flex justify-content-center">
          <Image src={HeaderLogo} className={styles.topLogo} />
        </Col>

        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <h2 className={`${styles.topHeading}`}>VISIONARY</h2>
          <Row style={{ maxWidth: "1020px" }}>
            <p className={`mt-3 ${styles.topPara}`}>
              Becoming more visionary involves cultivating a long-term mindset
              fueled by continuous learning and open-mindedness.
            </p>
          </Row>
          <Image src={VideoLogo} className={`mt-3 ${styles.heroVideo}`} />
        </div>

        <div className="d-flex justify-content-center align-items-center mt-4">
          <ButtonGroup className="mb-3 gap-3">
            <Row>
              <Col sm={12} md={4}>
                <Button
                  className={` mb-3  ${styles.customBtn} ${
                    active === 1 && styles.active
                  }`}
                  onClick={() => setActive(1)}
                >
                  TAKE THE QUIZ
                </Button>
              </Col>
              <Col sm={12} md={4}>
                <Button
                  className={` mb-3  ${styles.customBtn} ${
                    active === 2 && styles.active
                  }`}
                  onClick={() => setActive(2)}
                >
                  TAKE THE QUIZ
                </Button>
              </Col>
              <Col sm={12} md={4}>
                <Button
                  className={` mb-3  ${styles.customBtn} ${
                    active === 3 && styles.active
                  }`}
                  onClick={() => setActive(3)}
                >
                  TAKE THE QUIZ
                </Button>
              </Col>
            </Row>
          </ButtonGroup>
        </div>

        <div className="d-flex justify-content-center align-items-center ">
          <ButtonGroup className="mb-3 gap-3">
            <Row>
              <Col sm={12} md={4}>
                <Button
                  className={` mb-3  ${styles.customBtn} ${
                    active === 4 && styles.active
                  }`}
                  onClick={() => setActive(4)}
                >
                  TAKE THE QUIZ
                </Button>
              </Col>
              <Col sm={12} md={4}>
                <Button
                  className={` mb-3  ${styles.customBtn} ${
                    active === 5 && styles.active
                  }`}
                  onClick={() => setActive(5)}
                >
                  TAKE THE QUIZ
                </Button>
              </Col>
              <Col sm={12} md={4}>
                <Button
                  className={` mb-3  ${styles.customBtn} ${
                    active === 6 && styles.active
                  }`}
                  onClick={() => setActive(6)}
                >
                  TAKE THE QUIZ
                </Button>
              </Col>
            </Row>
          </ButtonGroup>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mt-3">
          <p className={`${styles.paraTwo}`}>
            LOCAL PROFESSIONALS IN YOUR AREA THAT CAN HELP WITH THIS ISSUE
          </p>
        </div>

        <Row className="mt-2">
          <Col sm={12} md={6} className="d-flex justify-content-md-end">
            <p className={`${styles.paraThree}`}>
              Are you a local professional?{" "}
              <a className={`${styles.paraSpanThree}`}> Click here</a>
            </p>
          </Col>
          <Col sm={12} md={6}>
            <p className={`${styles.paraFour}`}>
              Life coach | Therapist | Psychiatrist
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopSection;
