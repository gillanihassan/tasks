import { Image } from "react-bootstrap";
import styles from "./styles.module.css";
import FitLogo from "../../../taskFive/images/fitbit/fit-bit-logo.png";

function FitBit() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <div className="d-flex flex-column justify-content-center align-items-center mb-3">
        <Image src={FitLogo} />
        <p className={`mt-1 ${styles.topPara}`}>Our Purpose..</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className={`text-start ${styles.paraOne}`}>
          To create individual harmony by connecting people with nature, and
          with others.
        </p>
        <p className={`text-start ${styles.paraTwo}`}>
          “Many people want to “protect” nature from the humans. That is not
          what we’re doing here. We are an extension of nature, just as nature
          is an extension of us, and when people experience this, it produces an
          individual harmony that we believe will ultimately lead us to a better
          world — not just protect nature.
        </p>
      </div>
    </div>
  );
}

export default FitBit;
