import React from "react";
import { Navbar, Nav, Button, Container, Image } from "react-bootstrap";
import HeaderLogo from "../../../taskTwo/images/header/HeaderLogo.svg";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={`${styles.mainDiv}`}>
      <Navbar expand="lg" className={`${styles.navbar}`}>
        <Container fluid className="p-0">
          <Navbar.Brand href="#home" className="justify-content-start">
            <Image
              src={HeaderLogo}
              className={`d-inline-block align-top ${styles.logo}`}
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="d-flex justify-content-center align-items-center">
              <Nav.Link href="#home" className={`mx-2 ${styles.links}`}>
                Home
              </Nav.Link>
              <Nav.Link href="#services" className={`mx-2 ${styles.links}`}>
                Services
              </Nav.Link>
              <Nav.Link href="#what-we-do" className={`mx-2 ${styles.links}`}>
                What We Do
              </Nav.Link>
              <Nav.Link href="#our-process" className={`mx-2 ${styles.links}`}>
                Our Process
              </Nav.Link>
              <Nav.Link href="#team" className={`mx-2 ${styles.links}`}>
                Team
              </Nav.Link>
              <Nav.Link href="#about" className={`mx-2 ${styles.links}`}>
                About
              </Nav.Link>
              <Nav.Link href="#contact" className={`mx-2 ${styles.links}`}>
                Contact
              </Nav.Link>
              <Nav.Item>
                <Button className={`mx-3 ${styles.workBtn}`}>
                  Work With Us
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <div
          className={`d-flex flex-column justify-content-center align-items-center ${styles.contentDiv}`}
        >
          <h1 className={`${styles.mainHeading}`}>
            We Help Fast Growing Brands Get Amazon Under Control
          </h1>
          <p className={`${styles.contentPara}`}>
            Nearly a decade of retail experience in the Amazon marketplace
          </p>
          <Button className={`${styles.contentBtn}`}>Work With Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
