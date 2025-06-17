import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import iconOne from "../../../taskOne/images/footer/iconOne.png";
import iconTwo from "../../../taskOne/images/footer/iconTwo.png";
import iconThree from "../../../taskOne/images/footer/iconThree.png";

const Footer = () => {
  return (
    <footer>
      <div className={`container-xxl ${styles.mainContainer}`}>
        <Row>
          <Col md={5}>
            <h6 className={`${styles.footerHeading}`}>Our Recent Articles</h6>
            <p className={`${styles.footerPara}`}>
              Mind Matters - The Chiropractic Approach to Personal Growth Mind
              Balance - 100 Innovative Ways it Can Unleash Your Full Potential
              MindBalance not only helps individuals but couples stay together
              longer
            </p>
            <p className={styles.footerParaTwo}>See MORE On SmartGuy</p>
          </Col>

          {/* About Us */}
          <Col md={2}>
            <h6>
              <strong>About Us</strong>
            </h6>
            <p className="mb-1">Our Story</p>
            <p className="mb-1">How MindBalance Works</p>
            <p className="mb-1">The First Step</p>
            <p className="mb-1">Partnerships</p>
            <p>Press and Media</p>
          </Col>

          {/* Support */}
          <Col md={2}>
            <h6>
              <strong>Support</strong>
            </h6>
            <p className="mb-1">Contact Us</p>
            <p className="mb-1">FAQs</p>
            <p className="mb-1">Testimonials</p>
            <p className="mb-1">Advertise</p>
            <p>Affiliates</p>
          </Col>

          {/* Social & Apps */}
          <Col md={3}>
            <h6>
              <strong>Follow us</strong>
            </h6>
            <div className="d-flex mb-3 gap-2">
              <Image src={iconOne} alt="facebook" width={35} height={35} />
              <Image src={iconTwo} alt="facebook" width={35} height={35} />
              <Image src={iconThree} alt="facebook" width={35} height={35} />
              <Image src={iconOne} alt="facebook" width={35} height={35} />
              <Image src={iconTwo} alt="facebook" width={35} height={35} />
              <Image src={iconThree} alt="facebook" width={35} height={35} />
            </div>
            <h6>
              <strong>Get the App</strong>
            </h6>
            <div className="d-flex gap-2">
              <Image src={iconOne} alt="facebook" width={35} height={35} />
              <Image src={iconTwo} alt="facebook" width={35} height={35} />
              <Image src={iconThree} alt="facebook" width={35} height={35} />
              <Image src={iconOne} alt="facebook" width={35} height={35} />
              <Image src={iconTwo} alt="facebook" width={35} height={35} />
              <Image src={iconThree} alt="facebook" width={35} height={35} />
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
