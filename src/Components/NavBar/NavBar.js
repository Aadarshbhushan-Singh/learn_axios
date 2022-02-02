import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'
export const NavBar = () => {
      return <>
            <>
                  <Navbar bg="dark" variant="dark">
                        <Container>
                              <Navbar.Brand as={Link} to="/">VIT</Navbar.Brand>
                              <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/addStudents">Add Students</Nav.Link>
                              </Nav>
                        </Container>
                  </Navbar>
            </>

      </>;
};
