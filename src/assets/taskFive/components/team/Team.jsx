import { Button, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import FitLogo from "../../../taskFive/images/fitbit/fit-bit-logo.png";

function Team() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <div className="d-flex flex-column justify-content-center align-items-center mb-1">
        <p className={`mt-1 ${styles.topPara}`}>Team</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className={`text-start ${styles.paraOne}`}>
          We’re looking for creators, explorers, designers, and tradespeople
          like you to help us build new things. Recruiting now.
        </p>
        <Button className={`mt-3 ${styles.btn}`}> Join Discord</Button>
      </div>
    </div>
  );
}

export default Team;
