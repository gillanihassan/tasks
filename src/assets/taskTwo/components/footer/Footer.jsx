import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  InputGroup,
} from "react-bootstrap";
import styles from "./styles.module.css";
import FooterLogo from "../../../taskTwo/images/footer/footer-logo.png";
import facebook from "../../../taskTwo/images/footer/facebook.png";
import instagram from "../../../taskTwo/images/footer/instagram.png";
import twitter from "../../../taskTwo/images/footer/twitter.png";
import Mail from "../../../taskTwo/images/footer/mail.svg";
import Phone from "../../../taskTwo/images/footer/phone.svg";

const Footer = () => {
  return (
    <footer className={`${styles.footerDiv}`}>
      <Container className="p-4">
        <Row>
          <Col md={3}>
            <Image
              src={FooterLogo}
              alt="Bugelo Logo"
              className={`${styles.footerLogo}`}
            />
            <p className={`mt-4 ${styles.footerParaOne}`}>
              We Help Fast Growing Brands Get Amazon Under Control.
            </p>
            <div className="mt-4">
              <Image
                src={facebook}
                alt="Facebook"
                className={`${styles.footerIcons}`}
              />
              <Image
                src={instagram}
                alt="Instagram"
                className={`mx-3 ${styles.footerIcons}`}
              />
              <Image
                src={twitter}
                alt="Twitter"
                className={`${styles.footerIcons}`}
              />
            </div>
          </Col>

          <Col md={3}>
            <h5 className={`${styles.footerHeading}`}>Quick Link</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li className="mt-4 mb-2">
                <a className={` ${styles.footerLink}`}>Home</a>
              </li>
              <li className="mb-2">
                <a className={`${styles.footerLink}`}>About Us</a>
              </li>
              <li className="mb-2">
                <a className={`${styles.footerLink}`}>What We Do</a>
              </li>
              <li className="mb-2">
                <a className={`${styles.footerLink}`}>Our Process</a>
              </li>
              <li className="mb-2">
                <a className={`${styles.footerLink}`}>Team</a>
              </li>
              <li className="mb-2">
                <a className={`${styles.footerLink}`}>About</a>
              </li>
              <li>
                <a className={`${styles.footerLink}`}>Contact</a>
              </li>
            </ul>
          </Col>

          {/* Contact Information Column */}
          <Col md={3}>
            <h5 className={`${styles.footerHeading}`}>Contact Information</h5>
            <p className={`mt-5 ${styles.footerLink}`}>
              <Image src={Phone} alt="Phone" className="mx-2" />
              +420 731 255 465
            </p>
            <p className={` ${styles.footerLink}`}>
              <Image src={Mail} alt="Email" className="mx-2" />
              ales.kylar@bugelo.com
            </p>
          </Col>

          {/* Newsletter Subscription Column */}
          <Col md={3}>
            <h5 className={`${styles.footerHeading}`}>
              Subscribe Our Newsletter
            </h5>
            <Form className="mt-4">
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="enter email"
                  className={`${styles.formControl}`}
                />
                <InputGroup.Text className={`${styles.inputGroup}`}>
                  SUBSCRIBE
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
