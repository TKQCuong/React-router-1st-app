import React from "react";
import { Form, Button, Navbar, Nav, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NaviBar() {
  return (
      <Navbar bg="dark" variant="dark">
        <Link className="navbar-brand" to="/">HOME</Link>
        <Nav className="mr-auto">
          {/* <Link className="nav-link" to="/">Home</Link> */}
          <Link className="nav-link" to="/candidates">Candidates</Link>
          <Link className="nav-link" to="/companypage">Company Page</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
  );
}
