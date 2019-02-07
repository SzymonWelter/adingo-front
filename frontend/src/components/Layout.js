import React from 'react';
import {Container, Row} from "react-bootstrap";
import {MainNav} from "./MainNav";

export const Layout = (props) => {
    return (
        <Container fluid>
            <Row>
                <MainNav />
            </Row>
            <Row>
                {props.children}
            </Row>
        </Container>
    );
};

