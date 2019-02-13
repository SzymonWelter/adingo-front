import React, {Component} from 'react';
import {connect} from "react-redux";
import { Col, Container, Row} from "react-bootstrap";
import 'holderjs'

import {IntroCarousel, SignUpForm} from './';
class IntroPage extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={12} md={6}>
                        <IntroCarousel/>
                    </Col>
                    <Col xs={12} md={6}>
                        <SignUpForm/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedLoginPage = connect(mapStateToProps)(IntroPage);
export {connectedLoginPage as IntroPage};

