import React from 'react';
import {Navbar, Nav} from "react-bootstrap";


export const MainNav = (props) => {
    return (
        <Navbar bg="dark" variant="dark" expand={"lg"} style={{position: "relative", marginBottom: 50}}>
            <Navbar.Brand style={{position: "absolute", left: "50%",transform: "translateX(-50%)" }} href="/">
            <img
                className="d-block w-100"
                src="holder.js/200x40?text=LOGO&bg=F1A355"
                alt="LOGO"
            />
            </Navbar.Brand>
            <Nav/>
            <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-end"/>
            <Navbar.Collapse className="justify-content-end" id={"basic-navbar-nav"}>
                <Nav className="mr-auto">
                </Nav>
                /*TODO responsive dropdown login form*/

            </Navbar.Collapse>
        </Navbar>
    );
};
