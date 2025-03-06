"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Image } from "react-bootstrap";

export default function Home() {
  return (
    <main className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <Image src="/KHNA_LogoIcon_WEB.png" alt="Kō Hana Rum Logo" width={200} height={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#"><u>OUR JOURNEY</u></Nav.Link>
              <Nav.Link href="#">SHOP</Nav.Link>
              <Nav.Link href="#">CORPORATE GIFTING</Nav.Link>
              <Nav.Link href="#">VISIT</Nav.Link>
              <Nav.Link href="#">OHANA RUM CLUB</Nav.Link>
              <Nav.Link href="#">WHERE TO BUY</Nav.Link>
              <Nav.Link href="#">RECIPES</Nav.Link>
              <Nav.Link href="#" className="nav-link">
                <i className="bi bi-cart h5"></i> 0
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section with Book Now Button */}
      <section className="centerImage position-relative container-fluid d-flex align-items-center justify-content-center">
        <h1 className="text-center text-white fw-bold">OUR JOURNEY</h1>
        {/* Book Now Button */}
        <Image src="/wod-ko-hana-book-now.png" alt="Book Now" className="book-now" />
      </section>

      {/* Footer */}
      <footer className="bg-dark footer mt-auto">
        <Container>
          <div className="py-3 row">
            <div className="col-6 justify-content-start">
              <Image src="/KHNA_LogoIcon_WEB.png" alt="Kō Hana Rum Logo" width={200} />
              <div className="row">
                <div className="nav">
                  <Nav.Link href="#" className="nav-link">ALOHA@KOHANARUM.COM</Nav.Link>
                  <Nav.Link href="#" className="nav-link">(808) 649-0830</Nav.Link>
                  <Nav.Link href="#" className="nav-link">92-1770 Kunia Rd., #227, Kunia, HI 96759, USA</Nav.Link>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col justify-content-end rightCol">
              <div className="row">
                <div className="justify-content-end nav">
                  <Nav.Link href="#" className="nav-link text-white">
                    <i className="bi bi-instagram h3"></i>
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-link text-white">
                    <i className="bi bi-facebook h3"></i>
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-link text-white">
                    <i className="bi bi-twitter h3"></i>
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-link text-white">
                    <i className="bi bi-yelp h3"></i>
                  </Nav.Link>
                </div>
              </div>
              <div className="row">
                <div className="justify-content-end nav">
                  <Nav.Link href="#" className="nav-link">TERMS & CONDITIONS</Nav.Link>
                  <Nav.Link href="#" className="nav-link">PRIVACY POLICY</Nav.Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}