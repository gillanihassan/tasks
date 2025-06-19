import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import facebook from "../../../../taskFour/images/footer/Facebook.png";
import Instagram from "../../../../taskFour/images/footer/Instagram.png";
import Twitter from "../../../../taskFour/images/footer/Twitter.png";
import YouTube from "../../../../taskFour/images/footer/YouTube.png";
import GroupOne from "../../../../taskFour/images/footer/group-one.png";
import GroupTwo from "../../../../taskFour/images/footer/group-two.png";

function FooterSection() {
  return (
    <footer>
      <div className={`container-xxl ${styles.mainContainer}`}>
        <Row>
          <Col md={4}>
            <h6 className={`${styles.footerHeading}`}>Our Blog</h6>
            <p className={`mt-3 ${styles.footerPara}`}>
              Mind Balance 101: A Beginner's Guide Meditation for Better
              Personality? What is Meditation? The Ultimate Guide
            </p>
          </Col>

          {/* About Us */}
          <Col md={3}>
            <h6 className={`mt-3 mt-md-0 ${styles.footerHeading}`}>About Us</h6>
            <p className={`mb-0 mt-3 ${styles.footerPara}`}>Our Story</p>
            <p className={`mb-0  ${styles.footerPara}`}>Jobs</p>
            <p className={`mb-0  ${styles.footerPara}`}>
              Mind Balance for Work
            </p>
            <p className={`mb-0  ${styles.footerPara}`}>Press and Media</p>
          </Col>

          {/* Support */}
          <Col md={2}>
            <h6 className={`mt-5 mt-md-0 ${styles.footerHeading}`}>Support</h6>
            <p className={`mb-0 mt-3 ${styles.footerPara}`}>Contact Us</p>
            <p className={`mb-0  ${styles.footerPara}`}>FAQs</p>
            <p className={`mb-0  ${styles.footerPara}`}>Help Center</p>
          </Col>

          {/* Social & Apps */}
          <Col md={3}>
            <h6 className={`mt-5 mt-md-0 ${styles.footerHeading}`}>
              Follow us
            </h6>
            <div className="d-flex mb-3 gap-2 mt-3">
              <Image src={facebook} alt="facebook" width={30} height={30} />
              <Image src={Instagram} alt="facebook" width={30} height={30} />
              <Image src={Twitter} alt="facebook" width={30} height={30} />
              <Image src={YouTube} alt="facebook" width={30} height={30} />
            </div>
            <h6 className={`${styles.footerHeading}`}>Get the App</h6>
            <div className="d-flex gap-2 mt-3">
              <Image src={GroupOne} alt="facebook" width={120} height={40} />
              <Image src={GroupTwo} alt="facebook" width={120} height={40} />
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default FooterSection;
