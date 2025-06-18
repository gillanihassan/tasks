import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../../taskThree/images/licenseNavbar/logo.png";
import { Button, Image } from "react-bootstrap";
import styles from "./styles.module.css";

function LicenseNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={Logo} />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-5 d-flex jsutify-content-center align-items-center">
            <Nav.Link href="#home" className={`${styles.links}`}>
              Product features
            </Nav.Link>
            <Nav.Link href="#link" className={`${styles.links}`}>
              Getting started
            </Nav.Link>
            <Nav.Link href="#link" className={`${styles.links}`}>
              References
            </Nav.Link>
            <Nav.Link href="#link" className={`${styles.links}`}>
              News
            </Nav.Link>
            <Nav.Link href="#link" className={`${styles.links}`}>
              About us
            </Nav.Link>
            <Nav.Link>
              <Button className={`${styles.linkButton}`}>Buy now</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LicenseNav;
