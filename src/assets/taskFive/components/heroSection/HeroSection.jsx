import styles from "./styles.module.css";
import { Image } from "react-bootstrap";
import HeroImage from "../../../taskFive/images/heroSection/hero-img.png";

function HeroSection() {
  return (
    <div
      className={`container-xxl d-flex flex-column justify-content-center align-items-center ${styles.mainContainer}`}
    >
      <h2 className={`${styles.topHeading}`}>The Stays.</h2>
      <p className={`mb-4 mt-1 ${styles.topPara}`}>
        What you need to feel comfortable in the wild, and not an ounce more.
      </p>

      <div className={styles.imageWrapper}>
        <Image src={HeroImage} className={styles.customImage} />
        <div className={styles.boxDiv}>
          <p className={styles.boxPara}>Minimal</p>
          <p className={styles.boxPara}>Warm</p>
          <p className={styles.boxPara}>Secluded</p>
          <p className={styles.boxPara}>Hand-crafted</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
