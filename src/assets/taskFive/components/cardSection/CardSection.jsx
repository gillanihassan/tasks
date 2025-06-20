import { Card, Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import ImageOne from "../../../taskFive/images/card/img-one.png";
import ImageTwo from "../../../taskFive/images/card/img-two.png";
import ImageThree from "../../../taskFive/images/card/img-three.png";
import ImageFour from "../../../taskFive/images/card/img-four.png";

const cardData = [
  {
    img: ImageOne,
    title: "Card Minimal",
    text: "To simplify the moment. So that you can experience the feeling of decluttering your environment and decluttering your mind.",
  },
  {
    img: ImageTwo,
    title: "Card Balanced",
    text: "A subtle harmony of design that brings peace to your environment and clarity to your thoughts.",
  },
  {
    img: ImageThree,
    title: "Card Harmony",
    text: "Let your surroundings breathe. Let your mind be free of clutter with intentional design.",
  },
  {
    img: ImageFour,
    title: "Card Focus",
    text: "Eliminate the noise. Focus on what truly matters in a space that reflects calm.",
  },
];

function CardSection() {
  return (
    <div className={`container-xxl ${styles.mainContainer}`}>
      <h3 className={`text-center mb-3 ${styles.topHeading}`}>Our Design</h3>
      <Row className="d-flex justify-content-center align-items-center">
        {cardData.map((card, index) => (
          <Col
            key={index}
            sm={12}
            md={6}
            xl={6}
            xxl={6}
            className="d-flex justify-content-center align-items-center"
          >
            <Card style={{ width: "45rem" }} className="border-0 my-3">
              <Card.Img src={card.img} />
              <Card.Body>
                <Card.Title className={`mb-1 ${styles.cardHeading}`}>
                  {card.title}
                </Card.Title>
                <Card.Text className={`${styles.cardPara}`}>
                  {card.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardSection;
