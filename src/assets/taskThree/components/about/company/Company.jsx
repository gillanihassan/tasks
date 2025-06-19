import styles from "./styles.module.css";

function Company() {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <h2 className={`${styles.topHeading}`}>Who we are</h2>
      <p className={`mt-4 ${styles.para}`}>
        We are a new advanced simulations and integrations technology company,
        incorporated in 2017.
      </p>
      <p className={`mt-4 ${styles.para}`}>
        The core team has 20+ years of strategic and operational experience from
        advanced simulator technology development, implementation and operation.
      </p>
    </div>
  );
}

export default Company;
