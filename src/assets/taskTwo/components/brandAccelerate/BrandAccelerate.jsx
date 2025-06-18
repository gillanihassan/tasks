import { Container, Row, Col, Card, Image } from "react-bootstrap";
import BrandImage from "../../../taskTwo/images/brandAccelerate/brand-img.png";
const BrandAccelerate = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#0B2B85", color: "#fff" }}>
      <Container className="text-center">
        <p
          className="text-uppercase"
          style={{ color: "#00C1FE", letterSpacing: 2 }}
        >
          How It Works
        </p>
        <h2 className="fw-bold mb-5">How We Accelerate Your Brand</h2>

        <div className="position-relative d-flex justify-content-center align-items-center my-5">
          {/* Center Circle Image */}
          <Image
            src={BrandImage}
            alt="center"
            className="position-absolute"
            style={{ width: "120px", zIndex: 2 }}
          />

          {/* Steps in a circle */}
          <div
            className="position-relative"
            style={{ width: "700px", height: "700px" }}
          >
            <Row
              className="position-absolute top-0 start-50 translate-middle-x"
              style={{ width: "100%" }}
            >
              <Col md={4} className="text-end">
                <h6>Amazon Brand Management</h6>
                <p>
                  We stay in touch with you and discuss further strategies,
                  including launching new products.
                </p>
              </Col>
              <Col md={4}></Col>
              <Col md={4} className="text-start">
                <h6>Open an Account</h6>
                <p>
                  We open an account with you to ensure we’re set up and ready
                  to go as quickly as possible.
                </p>
              </Col>
            </Row>

            <Row
              className="position-absolute top-50 start-0 translate-middle-y"
              style={{ width: "100%" }}
            >
              <Col md={4} className="text-end">
                <h6>Eliminate Stockouts</h6>
                <p>We regularly monitor to eliminate stockouts.</p>
              </Col>
              <Col md={4}></Col>
              <Col md={4} className="text-start">
                <h6>In-Depth Product Analysis</h6>
                <p>
                  Our sales specialists will analyze your product(s) and Amazon
                  to help understand what’s working and what isn’t.
                </p>
              </Col>
            </Row>

            <Row
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ width: "100%" }}
            >
              <Col md={4} className="text-end">
                <h6>Amazon PPC</h6>
                <p>
                  We start running Amazon PPC as well as Amazon listing
                  optimization.
                </p>
              </Col>
              <Col md={4}></Col>
              <Col md={4} className="text-start">
                <h6>Place the First Order</h6>
                <p>
                  Once we understand your product(s), our team will place your
                  first order from you.
                </p>
              </Col>
            </Row>

            <Row
              className="position-absolute bottom-0 start-0 translate-middle-y"
              style={{ width: "100%" }}
            >
              <Col md={4} className="text-end">
                <h6>Improve Ranking of Products</h6>
                <p>
                  Once you have a few sales, we start the interesting part of
                  the push to further grow your ranking.
                </p>
              </Col>
              <Col md={4}></Col>
              <Col md={4} className="text-start">
                <h6>Prepare Your Products for Sale</h6>
                <p>
                  Once we receive your stock our team prepares your product(s)
                  following Amazon guidelines.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BrandAccelerate;
