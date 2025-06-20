import { Button, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import FitLogo from "../../../taskFive/images/fitbit/fit-bit-logo.png";

function Community() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <div className="d-flex flex-column justify-content-center align-items-center mb-3">
        <Image src={FitLogo} />
        <p className={`mt-1 ${styles.topPara}`}>Community..</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className={`text-start ${styles.paraOne}`}>
          Join our community chat where you can get the first scoop on
          developments, ask questions to our team, give feedback, and interact
          with other campers.
        </p>
        <Button className={`${styles.btn}`}> Join Discord</Button>
      </div>
    </div>
  );
}

export default Community;
