import styles from "./styles.module.css";
import { Col, Image, Row } from "react-bootstrap";
import WareHouseImage from "../../../taskTwo/images/wareHouse/ware-house-img.png";

function WareHouse() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <Row>
        <Col md={6} className="p-1">
          <Image src={WareHouseImage} className={`${styles.customImage}`} />
        </Col>
        <Col md={6} className="p-3 d-flex flex-column justify-content-center ">
          <p className={`text-uppercase ${styles.topPara}`}>warehouses</p>
          <h2 className={`${styles.topHeading}`}>
            Warehouses in the Middle of Europe
          </h2>
          <p className={`${styles.paraOne}`}>
            For the fastest and most efficient distribution we located our
            warehouse in the middle of Europe: The Czech Republic. We prepare
            all the products here based on Amazon’s terms and services and then
            distribute them across all European countries.
          </p>
          <p className={`${styles.paraOne}`}>
            We can also collect boxes or pallets anywhere in the EU. This way,
            you can just prepare the products and leave the Amazon brand
            management to us.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default WareHouse;
