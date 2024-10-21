import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/all">
      <Nav.Item>
        <Nav.Link as={Link} to="/all">
          All Questions
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/75-blind">
          75 Blind
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/university">
          University
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/core-problems">
          Core Problems
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
