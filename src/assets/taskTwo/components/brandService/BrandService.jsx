import styles from "./styles.module.css";
import { Col, Image, Row } from "react-bootstrap";
import img from "../../../taskTwo/images/brandService/img.png";

function BrandService() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <Row>
        <Col md={6} className="p-2">
          <Image src={img} className={`${styles.customImage}`} />
        </Col>
        <Col md={6} className="p-3 d-flex flex-column justify-content-center ">
          <p className={`text-uppercase ${styles.topPara}`}>our service</p>
          <h2 className={`${styles.topHeading}`}>
            No-Fee Amazon Brand Management
          </h2>
          <p className={`${styles.paraOne}`}>
            You never pay for our custom-tailored and comprehensive services.
            That’s because we earn our income by purchasing your products
            wholesale and then reselling them on Amazon. This unique approach
            ensures that our interests are 100% aligned with yours.
          </p>
          <p className={`${styles.paraOne}`}>
            For every sale we make, we reinvest a part of our profits to further
            improve the quality of each individual listing.{" "}
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default BrandService;
