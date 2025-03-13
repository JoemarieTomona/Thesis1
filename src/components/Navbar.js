import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        {/* Updated Navbar Brand with Logo */}
        <Navbar.Brand as={Link} to="/">
          <img src="/logo.png" alt="StealthScan Logo" style={{ height: "50px", marginRight: "10px" }} />
          <strong>StealthScan</strong>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/news">News</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/top-antivirus">Top Antivirus</Nav.Link>
            <Nav.Link as={Link} to="/removal-guides">Removal Guides</Nav.Link>
            <Nav.Link as={Link} to="/tutorial">Tutorial</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
