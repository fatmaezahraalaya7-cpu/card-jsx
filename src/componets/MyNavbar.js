function MyNavbar() {
  return (
    <Navbar className="cute-navbar" expand="lg">
      <Container>
        <Navbar.Brand className="logo">💕 Cute Shop</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Products</Nav.Link>
            <Nav.Link href="#">Favorites</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;