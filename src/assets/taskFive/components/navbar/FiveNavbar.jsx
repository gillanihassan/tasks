import styles from "./styles.module.css";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import NavLogo from "../../.././taskFive/images/navbar/nav-logo.png";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mt-4">
      <Container className="position-relative">
        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Centered Logo - Always stays at center */}
        <Navbar.Brand
          href="#home"
          className="position-absolute top-50 start-50 translate-middle"
          style={{ zIndex: 1 }} // Ensures it stays on top
        >
          <Image src={NavLogo} />
        </Navbar.Brand>

        {/* Collapsible Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left side links */}
          <Nav className="me-auto gap-5">
            <Nav.Link href="#home" className={`${styles.links}`}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" className={`${styles.links}`}>
              Camps
            </Nav.Link>
            <Nav.Link href="#link" className={`${styles.links}`}>
              Discover
            </Nav.Link>
            <Nav.Link href="#link" className={`${styles.links}`}>
              Blog
            </Nav.Link>
          </Nav>

          {/* Right side links */}
          <Nav className="ms-auto gap-5 d-flex justify-content-center align-items-center">
            <Nav.Link href="#about" className={`px-3 py-2 ${styles.linkTwo}`}>
              Join Our Team
            </Nav.Link>
            <Nav.Link href="#contact" className={`${styles.links}`}>
              Our Story
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
