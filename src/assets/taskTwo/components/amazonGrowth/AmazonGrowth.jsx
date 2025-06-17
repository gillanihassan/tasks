import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";

function AmazonGrowth() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <Row className="d-flex justify-content-center align-items-center">
        <Col
          md={10}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <p className={`text-uppercase mb-1 ${styles.topSpan}`}>
            pan european
          </p>
          <h2 className={`${styles.topHeading}`}>
            Pan European Amazon Experts
          </h2>
          <p className={`text-center mt-1 mt-sm-3 ${styles.mainPara}`}>
            By focusing only on Amazon Marketplace, we can stay up to date on
            the latest trends, monitor and test new strategies to maximise your
            brand’s sales potential, and be a responsible and experienced
            business partner for you in every situation that may arise. We don't
            get distracted by other channels, and we take care of everything,
            100%, to be the best at{" "}
            <span className={`${styles.mainParaSpan}`}>
              Amazon brand management.
            </span>
          </p>
          <Button className={`mt-1 mt-sm-4 ${styles.customBtn}`}>
            WORK WITH US
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default AmazonGrowth;
