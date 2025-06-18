import styles from "./styles.module.css";

function BuySection() {
  return (
    <div className={`container-xxl ${styles.mainContainer}`}>
      <h2 className={`${styles.topHeading}`}>Buy licenses</h2>
      <p className={`${styles.para}`}>
        Fill in your company information to request access to HiSklls for your
        team. You can see an estimated price by selecting how many licenses you
        need.
      </p>
    </div>
  );
}

export default BuySection;
