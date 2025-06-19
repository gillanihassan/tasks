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

function MainSection() {
  return (
    <div className={` ${styles.mainContainer}`}>
      <Container className="px-3 px-md-0">
        <Col md={6} className="d-flex justify-content-center">
          <Image src={HeaderLogo} className={styles.topLogo} />
        </Col>

        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <h2 className={`${styles.topHeading}`}>VISIONARY</h2>
          <h2 className={`mt-2 ${styles.topHeadingTwo}`}>
            Continuing more option
          </h2>
        </div>

        <Container className="d-flex justify-content-center">
          <Col md={10} className="mt-4">
            <Row>
              <Col md={3}>
                <p
                  className={`d-flex justify-content-center align-items-end ${styles.leftPara}`}
                >
                  Strategic thinker
                </p>
              </Col>
              <Col md={9}>
                <p className={`${styles.rightPara}`}>
                  His ability to plan effectively was crucial to the success of
                  the anti-apartheid movement.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <p
                  className={`d-flex justify-content-center align-items-end ${styles.leftPara}`}
                >
                  Emotionally intelligent
                </p>
              </Col>
              <Col md={9}>
                <p className={`${styles.rightPara}`}>
                  He could read and influence the emotions of others, which was
                  key in negotiations.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <p
                  className={`d-flex justify-content-center align-items-end ${styles.leftPara}`}
                >
                  Principled
                </p>
              </Col>
              <Col md={9}>
                <p className={`${styles.rightPara}`}>
                  He stood by his beliefs, even when faced with immense pressure
                  to relent.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <p
                  className={`d-flex justify-content-center align-items-end ${styles.leftPara}`}
                >
                  Fair-minded
                </p>
              </Col>
              <Col md={9}>
                <p className={`${styles.rightPara}`}>
                  Mandela championed justice and fairness, traits that were
                  foundational to the new South Africa.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <p
                  className={`d-flex justify-content-center align-items-end ${styles.leftPara}`}
                >
                  Decisive
                </p>
              </Col>
              <Col md={9}>
                <p className={`${styles.rightPara}`}>
                  Making tough choices, especially in turbulent times, was a
                  hallmark of his leadership.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <p
                  className={`d-flex justify-content-center align-items-end ${styles.leftPara}`}
                >
                  Trustworthy
                </p>
              </Col>
              <Col md={9}>
                <p className={`${styles.rightPara}`}>
                  People believed in him because he consistently kept his word.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <p
                  className={`d-flex justify-content-center align-items-end ${styles.leftPara}`}
                >
                  Courageous
                </p>
              </Col>
              <Col md={9}>
                <p className={`${styles.rightPara}`}>
                  Facing an oppressive regime required immense courage, which
                  Mandela displayed throughout his life.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <p
                  className={`d-flex justify-content-center align-items-end ${styles.leftPara}`}
                >
                  Adaptable
                </p>
              </Col>
              <Col md={9}>
                <p className={`${styles.rightPara}`}>
                  He adjusted his strategies when needed, demonstrating
                  flexibility for the greater good.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <p
                  className={`d-flex justify-content-center align-items-end ${styles.leftPara}`}
                >
                  Persistent
                </p>
              </Col>
              <Col md={9}>
                <p className={`${styles.rightPara}`}>
                  Despite setbacks, Mandela remained undeterred in his fight
                  against apartheid.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <p
                  className={`d-flex justify-content-center align-items-end ${styles.leftPara}`}
                >
                  Motivating
                </p>
              </Col>
              <Col md={9}>
                <p className={`${styles.rightPara}`}>
                  He had the ability to galvanize people towards a shared goal.
                </p>
              </Col>
            </Row>
          </Col>
        </Container>

        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
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

        <div className="d-flex flex-column justify-content-center align-items-center mt-4 mb-5">
          <Button className={`${styles.customBtn}`}>CONTINUE</Button>
        </div>
      </Container>
    </div>
  );
}

export default MainSection;
