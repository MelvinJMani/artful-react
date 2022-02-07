import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "assets/logo.svg"

const Menu = () => {
  return (
    <Container>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="100%"
            height="100%"
            className="d-inline-block align-top"
            alt="artful React Logo"
          />
        </Navbar.Brand>

        <Nav.Item>
          <Nav.Link href="/about">About Project</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact Me</Nav.Link>
        </Nav.Item>
      </header>
    </Container>
  );
};

export default Menu;
