import styles from "./styles.module.css";
import { Button } from "react-bootstrap";

function Policy() {
  return (
    <div
      className={`container-xxl d-flex flex-column justify-content-md-center align-items-md-center justify-content-center align-items-center ${styles.mainDiv}`}
    >
      <div className=" text-start">
        <p className={`${styles.topPara}`}>
          NOK <span className={`${styles.spanOne}`}>599</span>{" "}
          <span className={`${styles.spanTwo}`}> / total every 3 months</span>
        </p>
        <Button className={`${styles.customBtn}`}>Buy licenses</Button>
        <p className={`mt-4 ${styles.paraTwo}`}>
          By clicking "Buy licenses" I agree to and Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default Policy;
