import { Col, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import HeroImage from "../../../../taskThree/images/reference/topSection/hero-img.png";
import Logo from "../../../../taskThree/images/reference/topSection/logo.png";
import Quote from "../../../../taskThree/images/reference/topSection/quote.png";

function Success() {
  return (
    <div className={`container-xxl ${styles.mainContainer}`}>
      <Row>
        <Col md={6} className="p-3 d-flex flex-column  align-items-center">
          <div className="text-start">
            <Image src={Logo} />
            <h2 className={`${styles.topHeading}`}>
              Short title about the success
            </h2>
            <p className={`mt-4 ${styles.topPara}`}>
              Alle som jobber med livreddende arbeid får økt kompetanse,
              erfaring og trygghet til å håndtere akutte nødsituasjoner som kan
              oppstå i løpet av arbeidsdagen.{" "}
            </p>
            <p className={`${styles.topPara}`}>
              HiSklls hjelper operatører i nødsituasjoner å stille riktig
              diagnose og behandling tidlig. Løsningen er også mindre
              ressurskrevende å bruke enn instruktører og treningen ofte mer
              realistisk.
            </p>
            <p className={`${styles.topPara}`}>
              HiSklls tilbyr en-til-en trening hvor helsepersonell får trent seg
              på å håndtere kritiske situasjoner på en realistisk måte. Dette
              skjer ved at de mottar alle tenkelige nødsamtaler fra virtuelle
              innringere ved hjelp av kunstig intelligens.
            </p>
            <Image src={Quote} className="mt-4 mb-3" />
            <p className={`${styles.paraTwo}`}>
              Alle som jobber med livreddende arbeid får økt kompetanse,
              erfaring og trygghet til å håndtere akutte nødsituasjoner som kan
              oppstå i løpet av arbeidsdagen.
            </p>
            <p className={`mt-3 mb-0 ${styles.paraTwo}`}>
              Tone Alfsvåg Engelsen
            </p>
            <p className={`${styles.paraThree}`}>EMD Bergen, Norway</p>
          </div>
        </Col>
        <Col md={6}>
          <Image src={HeroImage} className={styles.customImage} />
        </Col>
      </Row>
    </div>
  );
}

export default Success;
