import React, {Component} from 'react';
import {connect} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import 'holderjs'

import {IntroCarousel, SignUpForm} from '..';
import {userActions} from "../../actions";

class IntroPage extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(userActions.logout());
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        localStorage.setItem('previousRoute',JSON.stringify(from));
    }


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

function mapStateToProps() {
    return {};
}

const connectedLoginPage = connect(mapStateToProps)(IntroPage);
export {connectedLoginPage as IntroPage};

