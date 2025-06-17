import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FooterLogo from "../../../taskTwo/images/footer/footer-logo.png";
import facebook from "../../../taskTwo/images/footer/facebook.png";
import instagram from "../../../taskTwo/images/footer/instagram.png";
import twitter from "../../../taskTwo/images/footer/twitter.png";
// import phoneIcon from "./phone.png";
// import emailIcon from "./email.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#F5F5F5",
        padding: "20px 0",
        color: "#1E3A8A",
        border: "4px solid red",
      }}
    >
      <Container>
        <Row>
          {/* Logo Column */}
          <Col md={3}>
            <img
              src={FooterLogo}
              alt="Bugelo Logo"
              style={{ width: "100px" }}
            />
            <p style={{ marginTop: "10px" }}>
              We Help Fast Growing Brands Get Amazon Under Control.
            </p>
            <div style={{ marginTop: "10px" }}>
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "24px", marginRight: "10px" }}
              />
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "24px", marginRight: "10px" }}
              />
              <img src={twitter} alt="Twitter" style={{ width: "24px" }} />
            </div>
          </Col>

          {/* Quick Links Column */}
          <Col md={3}>
            <h5>Quick Link</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a
                  href="#home"
                  style={{ color: "#1E3A8A", textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  style={{ color: "#1E3A8A", textDecoration: "none" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#what-we-do"
                  style={{ color: "#1E3A8A", textDecoration: "none" }}
                >
                  What We Do
                </a>
              </li>
              <li>
                <a
                  href="#our-process"
                  style={{ color: "#1E3A8A", textDecoration: "none" }}
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  style={{ color: "#1E3A8A", textDecoration: "none" }}
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  style={{ color: "#1E3A8A", textDecoration: "none" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{ color: "#1E3A8A", textDecoration: "none" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Information Column */}
          <Col md={3}>
            <h5>Contact Information</h5>
            <p>
              {/* <img src={phoneIcon} alt="Phone" style={{ width: "16px", marginRight: "5px" }} /> */}
              +420 731 255 465
            </p>
            <p>
              {/* <img src={emailIcon} alt="Email" style={{ width: "16px", marginRight: "5px" }} /> */}
              ales.kylar@bugelo.com
            </p>
          </Col>

          {/* Newsletter Subscription Column */}
          <Col md={3}>
            <h5>Subscribe Our Newsletter</h5>
            <Form>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                style={{ marginBottom: "10px" }}
              />
              <Button
                variant="info"
                style={{
                  backgroundColor: "#00C4CC",
                  border: "none",
                  width: "100%",
                }}
              >
                SUBSCRIBE
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col
            className="text-center"
            style={{ marginTop: "20px", color: "#1E3A8A" }}
          >
            <p>©2022 Bugelo.com all right reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
