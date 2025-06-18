import { Container, Row, Col, Button, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import facebook from "../../../../taskThree/images/footer/facebook.png";
import Logo from "../../../../taskThree/images/footer/footer-logo.png";
import Link from "../../../../taskThree/images/footer/link-din.png";

const LicenseFooter = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <Container>
        <Row className="align-items-start">
          {/* Left - Logo and Icons */}
          <Col md={3}>
            <Image src={Logo} className="mb-5" />
            <div style={{ marginBottom: "10px" }}>
              <Image src={facebook} />
              <span className={`ms-2 ${styles.mainSpan}`}> Facebook</span>
            </div>
            <div className="mt-3">
              <Image src={Link} />
              <span className={`ms-3 ${styles.mainSpan}`}>LinkedIn</span>
            </div>
          </Col>

          <Col md={6}>
            <p className={`mt-5 mt-md-0 ${styles.footerPara}`}>
              Give HiSkills a try to find out if it is right for you.
              <br />
              No credit card required.
            </p>
            <div className="d-flex gap-3 mt-5">
              <Button className={`${styles.btnOne}`}>Request free trial</Button>
              <Button className={`${styles.btnTwo}`}>Buy now</Button>
            </div>
          </Col>

          {/* Right - Navigation Links */}
          <Col md={3} className="mt-5 mt-md-0">
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              <li className="mb-2">
                <a className={` ${styles.customLink}`}>Product features</a>
              </li>
              <li className="mb-2">
                <a href="#" className={`${styles.customLink}`}>
                  References
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className={`${styles.customLink}`}>
                  Getting started
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className={`${styles.customLink}`}>
                  News
                </a>
              </li>
              <li>
                <a href="#" className={`${styles.customLink}`}>
                  About us
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LicenseFooter;
