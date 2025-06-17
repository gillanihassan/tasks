import { Col, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import ImageOne from "../../../taskTwo/images/teamSection/img-one.png";
import ImageTwo from "../../../taskTwo/images/teamSection/img-two.png";
import ImageThree from "../../../taskTwo/images/teamSection/img-three.png";

function TeamSection() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <p className={`text-uppercase text-center ${styles.topPara}`}>team</p>
      <h2 className={`text-center ${styles.topHeading}`}>
        Our Experienced Team
      </h2>
      <p className={`mt-3 text-center  ${styles.paraOne}`}>
        We value hard work, a flexible and friendly environment, and having good
        people around us.
      </p>
      <Row>
        <Col
          md={4}
          className="d-flex flex-column justify-content-center align-items-center p-2"
        >
          <Image src={ImageOne} className={styles.colImg} />
          <h4 className={`mt-4 ${styles.colHeading}`}>Pavla Hagarova</h4>
          <h6 className={`${styles.colFooter}`}>ACCOUNT MANAGER</h6>
        </Col>
        <Col
          md={4}
          className="d-flex flex-column justify-content-center align-items-center p-2"
        >
          <Image src={ImageTwo} className={styles.colImg} />
          <h4 className={`mt-4 ${styles.colHeading}`}>Ales Kylar</h4>
          <h6 className={`${styles.colFooter}`}>CEO</h6>
        </Col>
        <Col
          md={4}
          className="d-flex flex-column justify-content-center align-items-center p-2"
        >
          <Image src={ImageThree} className={styles.colImg} />
          <h4 className={`mt-4 ${styles.colHeading}`}>Marek Sram</h4>
          <h6 className={`${styles.colFooter}`}>SALES MANAGER</h6>
        </Col>
      </Row>
    </div>
  );
}

export default TeamSection;
