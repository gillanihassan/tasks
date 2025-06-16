import { Container, Row, Col, Card, Image } from "react-bootstrap";
import imgOne from "../../../assets/images/testimonials/imgOne.png";
import imgTwo from "../../../assets/images/testimonials/imgTwo.png";
import imgThree from "../../../assets/images/testimonials/imgThree.png";
import styles from "./styles.module.css";

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Real Stories. Real Transformations.",
      text: "Mind Balance helped me understand my true strengths, and the self-improvement resources were just what I needed to take my career to the next level!",
      name: "Sarah",
      info: "28 (New York)",
      image: imgOne,
    },
    {
      quote: "An Amazing website",
      text: "I’ve been using the personality tests for months, and I can honestly say that it’s been life-changing. I feel more confident and at peace with my decisions.",
      name: "John Smith",
      info: "35 (Los Angeles)",
      image: imgTwo,
    },
    {
      quote: "How Mind Balance Changed Lives",
      text: "I’ve been using Mind Balance for over a year, and it’s helped me grow both personally and professionally. The free resources are incredible, and I’ve seen real progress in my journey.",
      name: "Mike Warren",
      info: "Developer at BRIX Templates",
      image: imgThree,
    },
  ];

  return (
    <div className="container-xxl mt-5">
      <h3 className={`text-center ${styles.topHeading}`}>
        Hear From Our Community
      </h3>
      <p className={`text-center ${styles.customPara}`}>
        Join thousands of people who’ve transformed their lives with Mind
        Balance. Here’s what they have to say
      </p>
      <Row className="g-4">
        {testimonials.map((item, index) => (
          <Col md={6} lg={4} key={index}>
            <Card className={`h-100 shadow-sm mt-4  ${styles.mainCard}`}>
              <Card.Body>
                <Card.Title className={` mb-3 ${styles.cardTitle}`}>
                  “{item.quote}”
                </Card.Title>
                <Card.Text className={styles.cardText}>{item.text}</Card.Text>

                <div className="d-flex align-items-center mt-4">
                  <Image
                    src={item.image}
                    roundedCircle
                    width={35}
                    height={35}
                    className="me-3"
                    alt={item.name}
                  />
                  <div>
                    <div className={styles.userName}>{item.name}</div>
                    <div className={styles.userInfo}>{item.info}</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default TestimonialsSection;
