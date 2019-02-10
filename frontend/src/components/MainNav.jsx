import React from 'react';
import {Navbar, Button, Container, Row, Col} from "react-bootstrap";

export const MainNav = (props) => {
    return (
        <Container fluid style={{paddingLeft: 0, paddingRight: 0, marginBottom: 100}}>
            <Navbar bg="dark" variant="dark">
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Brand href="/">LOGO</Navbar.Brand>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Button variant="outline-info">Log In</Button>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};
