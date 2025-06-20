import { Container, Row, Col, Image, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import img from "../../../taskFive/images/mountain/img.png";

const Mountain = () => {
  return (
    <div className="p-3">
      <div className={`container-xxl ${styles.mainDiv}`}>
        <Row className="align-items-center">
          <Col
            md={8}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="p-4">
              <h2 className={`${styles.topHeading}`}>
                Starting with our home in North Carolina.
              </h2>
              <p className={`mt-4 ${styles.topPara}`}>
                In one of the most underrated mountainous regions in the US.
              </p>
              <Button className={`mt-3 ${styles.btn}`}>
                Follow the Project.
              </Button>
            </div>
          </Col>
          <Col md={4} className="p-0">
            <div className="text-center">
              <Image
                src={img}
                alt="Mountain Stream"
                className="img-fluid rounded"
                style={{ width: "428px" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Mountain;
