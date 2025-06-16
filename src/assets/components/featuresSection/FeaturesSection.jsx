import { Button, Card, Col, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import notepad from "../../../assets/images/featuresSection/notepad.svg";
import youtube from "../../../assets/images/featuresSection/youtube.svg";
import chart from "../../../assets/images/featuresSection/chart.svg";

// === Card Data Array ===
const featureCards = [
  {
    image: notepad,
    title: "Personality Tests",
    text: "Uncover your strengths and unlock personal insights with our scientifically backed personality tests. Know yourself better and take the first step toward growth.",
    buttonText: "Start Your Test",
  },
  {
    image: youtube,
    title: "Self-Improvement Videos",
    text: "Access a library of free self-improvement videos that cover everything from mindset to productivity. Learn from experts and boost your personal growth.",
    buttonText: "Watch Now",
  },
  {
    image: chart,
    title: "Progress Tracking",
    text: "Track your personal growth with intuitive, easy-to-use tools. Monitor your progress and celebrate every milestone on your journey.",
    buttonText: "Start Your Test",
  },
];

function FeaturesSection() {
  return (
    <div className="container-xxl">
      <div className="text-center">
        <h2 className={`${styles.topHeading}`}>
          Unlock Your Potential with Mind Balance
        </h2>
        <p className={`${styles.customPara}`}>
          Explore our powerful tools designed to help you grow and thrive. From
          personality insights to expert guidance and progress tracking,
          discover resources that empower your personal journey—completely free.
        </p>
      </div>
      <Row className="">
        {featureCards.map((card, index) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            xxl={4}
            key={index}
            // style={{ border: "2px solid red" }}
            className="d-flex justify-content-center"
          >
            <Card
              className={`mt-md-5 mb-md-5 mt-3 mb-3   ${styles.featureCard}`}
            >
              <Card.Body>
                <div>
                  <Image src={card.image} className="mt-5 mb-4" />
                </div>
                <Card.Title className={`mt-2 ${styles.cardHeading}`}>
                  {card.title}
                </Card.Title>
                <Card.Text className={`${styles.cardPara}`}>
                  {card.text}
                </Card.Text>
                <Button
                  className={`mt-2 mb-4  ${
                    index === 1 ? styles.cardBtnTwo : styles.cardBtnOne
                  }`}
                >
                  {card.buttonText}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FeaturesSection;
