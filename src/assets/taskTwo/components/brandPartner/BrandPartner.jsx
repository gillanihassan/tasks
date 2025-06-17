import styles from "./styles.module.css";
import { Col, Image, Row } from "react-bootstrap";
import HandImage from "../../../taskTwo/images/brandPartner/hand-img.png";

function BrandPartner() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <Row>
        <Col md={6} className="p-4 d-flex flex-column justify-content-center ">
          <p className={`text-uppercase ${styles.topPara}`}>communication</p>
          <h2 className={`${styles.topHeading}`}>Reliable Brand Partners</h2>
          <p className={`${styles.paraOne}`}>
            With our full-service support, you’ll finally have an Amazon brand
            partner you can count on. We respond and answer every question you
            have as fast as possible so that you can efficiently move your
            project to the next level.
          </p>
          <p className={`${styles.paraOne}`}>
            We’re always here to discuss new strategies, elevate your listings,
            and help you unlock the full potential of your brand’s growth on
            Amazon.
          </p>
        </Col>
        <Col md={6} className="p-2">
          <Image src={HandImage} className={`${styles.customImage}`} alt="" />
        </Col>
      </Row>
    </div>
  );
}

export default BrandPartner;
