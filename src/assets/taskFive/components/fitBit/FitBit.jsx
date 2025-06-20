import { Image } from "react-bootstrap";
import styles from "./styles.module.css";
import FitLogo from "../../../taskFive/images/fitbit/fit-bit-logo.png";

function FitBit() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <div className="d-flex flex-column justify-content-center align-items-center mb-3">
        <Image src={FitLogo} />
        <p className={`mt-1 ${styles.topPara}`}>Imagine.</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className={`text-center ${styles.paraOne}`}>
          A world where “time spent in nature” is a wellness measure on your
          Fitbit.
        </p>
      </div>
    </div>
  );
}

export default FitBit;
