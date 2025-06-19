import { Col, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import FunFree from "../../../images/product/fun-free.png";
import proven from "../../../images/product/proven.png";
import mask from "../../../images/product/mask.png";
import rocket from "../../../images/product/rocket.png";
import NoteBook from "../../../images/product/note-book.png";
import chair from "../../../images/product/chair.png";
import book from "../../../images/product/book.png";
import thumb from "../../../images/product/thumb.png";

const sectionsData = [
  {
    id: 1,
    heading: "Fun. Free. Powerful!",
    text: `Mind Balance is a fun and easy way to unleash your full potential! Improve your mindset with great videos, tasks, recommended books and movies and more, as you earn gems, stars, avatars and unlock new levels of mental mastery!`,
    image: FunFree,
  },
  {
    id: 2,
    heading: "Proven results",
    text: `Identifying and removing weaknesses in your personality can lead to better coping strategies, improved relationships, enhanced school or career prospects, increased self-esteem, better decisions, improved mental and physical health and so much more!`,
    image: proven,
  },
  {
    id: 3,
    heading: "Personalized growth",
    text: `Start with a self-assessment test and discover weaknesses in your personality or jump right into watching specific videos in areas you know you need help!`,
    image: mask,
  },
  {
    id: 4,
    heading: "Stay motivated",
    text: `Progress at your own speed 24/7 in your own or create a support group of your friends and/or family for encouragement and motivation.`,
    image: rocket,
  },
  {
    id: 5,
    heading: "Amazing reports",
    text: `Track your results with graphical reports! Discover not only your strengths and weaknesses, but watch your progression forward as your scores on personality traits continue to improve!`,
    image: NoteBook,
  },
  {
    id: 6,
    heading: "Become your idol",
    text: `Gandhi, Earhart, Musk, Teresa, King, Einstein,
Da Vinci.. Simply take the self assessment test and then select one of hundreds of famous people. Once complete, we will then display their personality traits, and prepare a detailed plan based on your test results, to help you become more like them!`,
    image: chair,
  },
  {
    id: 7,
    heading: "Integrated journal",
    text: `Start with a self-assessment test and discover weaknesses in your personality or jump right into watching specific videos in areas you know you need help!`,
    image: book,
  },
  {
    id: 8,
    heading: "Share MindBalance",
    text: `Whether your looking to increase your personal success and happiness, or wish to help another family member or friend, MindBalance is FREE! Share it with others and help everyone become the best they can be!`,
    image: thumb,
  },
];

function ProductSections() {
  return (
    <div className={`container-xxl ${styles.mainContainer}`}>
      {sectionsData.map((section, index) => {
        const isEven = index % 2 === 0;

        return (
          <Row key={section.id} className=" align-items-center">
            {/* Left Column */}
            <Col
              md={6}
              className={`d-flex flex-column justify-content-center px-3 px-md-5 ${
                isEven ? "order-md-1" : "order-md-2"
              }`}
            >
              <h2
                className={`mt-2 ${styles.topHeading}`}
                style={
                  index === 1
                    ? { color: "#3457F1" }
                    : index === 2
                    ? { color: "#7E4EA4" }
                    : index === 3
                    ? { color: "#D8190A" }
                    : index === 4
                    ? { color: "#4682AD" }
                    : index === 5
                    ? { color: "#25455C" }
                    : index === 6
                    ? { color: "#1877C8" }
                    : index === 7
                    ? { color: "#3D9B47" }
                    : {}
                }
              >
                {section.heading}
              </h2>

              <p className={`mt-2 ${styles.para}`}>{section.text}</p>
            </Col>

            {/* Right Column - Image */}
            <Col
              md={6}
              className={`p-0 d-flex justify-content-center ${
                isEven ? "order-md-2" : "order-md-1"
              }`}
            >
              <Image
                src={section.image}
                style={{ width: "100%", maxWidth: "768px" }}
              />
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export default ProductSections;
