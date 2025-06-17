import styles from "./styles.module.css";
import { Col, Image, Row } from "react-bootstrap";
import map from "../../../taskTwo/images/marketAccess/map.svg";

function MarketAccess() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <Row>
        <Col md={6} className="p-4 d-flex flex-column justify-content-center ">
          <p className={`text-uppercase ${styles.topPara}`}>Big reach</p>
          <h2 className={`${styles.topHeading}`}>
            Reach Over 375 Million People
          </h2>
          <p className={`${styles.paraOne}`}>
            Your brand is there for your customers, and that's the way we see
            it. For that reason, we are registered with Amazon Pan European
            program. With us, you can easily reach over 375 million people for
            the cheapest fulfilment fees possible, meaning your selling prices
            will always be competitive.
          </p>
          <p className={`${styles.paraOne}`}>
            Being in the Fulfilment by Amazon program and having the Prime badge
            means that next-day delivery is available to all the countries
            illustrated here.
          </p>
        </Col>
        <Col md={6} className="p-2">
          <Image src={map} className={`${styles.customImage}`} />
        </Col>
      </Row>
    </div>
  );
}

export default MarketAccess;
