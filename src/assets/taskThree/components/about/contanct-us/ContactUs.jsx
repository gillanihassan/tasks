import styles from "./styles.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import MapImage from "../../../images/about/contact/map-img.png";

const ContactUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${MapImage})`,
      }}
      className={`container-xxl ${styles.mapBackground}`}
    >
      <Container className="py-5">
        <Row className="justify-content-start">
          <Col
            md={6}
            className={`bg-white p-4 rounded shadow p-5 ${styles.leftCol}`}
            style={{ opacity: 0.9 }}
          >
            <h2 className={`mb-5 ${styles.topHeading}`}>Contact us</h2>
            <p>
              <Image />
              +47 123 45 678
            </p>
            <p>
              <span role="img" aria-label="email">
                📧
              </span>{" "}
              support@skills.no
            </p>
            <p>
              <span role="img" aria-label="location">
                📍
              </span>{" "}
              Luramyrveien 69, 4313 Sandnes, Norway
            </p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange"
            >
              Find on Google Maps
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
