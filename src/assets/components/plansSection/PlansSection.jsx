import { Container, Row, Col, Card, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import imgOne from "../../../assets/images/PlansSection/imgOne.svg";
import imgTwo from "../../../assets/images/PlansSection/imgTwo.png";
function PlansSection() {
  const freeFeatures = [
    "Unlimited Access",
    "Premium Content",
    "No Credit Card Required",
    "Personalized Recommendations",
    "Ad-Free Experience",
  ];

  const paidLimitations = [
    "Limited by Subscription",
    "Requires Paid Upgrade",
    "Mandatory for Sign-Up",
    "Only in Premium Plans",
    "Ad-Supported",
  ];

  return (
    <Container className=" my-5">
      <h4 className={`${styles.topHeading} text-center`}>
        Why Pay When You Can Grow for Free?
      </h4>
      <p className={`${styles.customPara} text-center`}>
        Get unlimited access to premium self-growth resources without spending a
        penny.
      </p>

      <Row className="mt-3 justify-content-center gy-4">
        <Col sm={11} md={6} lg={5} xl={5} xxl={4}>
          <Card className={`h-100  ${styles.cardOne}`}>
            {freeFeatures.map((feature, idx) => (
              <div key={idx} className="d-flex gap-2 ">
                <Image
                  src={imgOne}
                  className="mt-2"
                  alt="check"
                  width="20"
                  height="20"
                />
                <p className={`${styles.features}`}>{feature}</p>
              </div>
            ))}
          </Card>
        </Col>
        <Col sm={11} md={6} lg={5} xl={5} xxl={4}>
          <Card className={`h-100  ${styles.cardTwo}`}>
            {paidLimitations.map((limitation, idx) => (
              <div key={idx} className="d-flex gap-2 ">
                <Image
                  src={imgTwo}
                  className="mt-2"
                  alt="check"
                  width="15"
                  height="15"
                />
                <p className={`${styles.features}`}>{limitation}</p>
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PlansSection;
