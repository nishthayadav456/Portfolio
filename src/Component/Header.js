import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
const Header = () => {
  const common = {
    marginRight: 15,
    fontSize: 17,
    letterSpacing: ".5px",
  };
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <div>
            <h2 className="mt-2 h2_right" style={{ color: "#6c63ff" }}>
              <NavLink href="#home" className="text-decoration-none">
                Nishtha Yadav
              </NavLink>
            </h2>
          </div>

          <Nav className="">
            <div className="mt-2">
              <NavLink to="/" className="text-decoration-none" style={common}>
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-decoration-none"
                style={common}
              >
                About
              </NavLink>
              <NavLink
                to="/playlist"
                className="text-decoration-none"
                style={common}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className="text-decoration-none"
                style={common}
              >
                Contact
              </NavLink>
            </div>
            <div>
              <Button variant="danger">Youtube</Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
