import React from 'react';
import {Container, Row} from "react-bootstrap";
import {MainNav} from "./";
import Col from "react-bootstrap/es/Col";

export const Layout = (props) => {
    return (
        <Container fluid>
            <Row>
                <MainNav />
            </Row>
            <Row>
                <Col lg={0} xl={1}>
                </Col>
                <Col lg={12} xl={10}>
                {props.children}
                </Col>
                <Col lg={0} xl={1}>
                </Col>
            </Row>
        </Container>
    );
};

