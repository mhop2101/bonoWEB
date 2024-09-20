import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';

function MyNavbar({ tilted }) {

    const navbarStyle = {
        transform: tilted ? 'rotate(180deg)' : 'none',
        transition: 'transform 0.3s ease-in-out',  // Smooth transition for rotation
    };

    return (
        <Navbar bg="light" expand="lg" style={navbarStyle}>
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto">
                        <Nav.Link href="#" className="active">
                            Home <span className="sr-only">(current)</span>
                        </Nav.Link>
                        <Nav.Link href="#">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="navbarDropdown">
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex ms-auto">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" type="submit">
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
