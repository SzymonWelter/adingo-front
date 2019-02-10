import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Card, Carousel, Col, Container, Form, Row} from "react-bootstrap";
import 'holderjs'
import ModalTitle from "react-bootstrap/es/ModalTitle";

class IntroPage extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={12} md={6}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=First item&bg=373940"
                                    alt="First item"
                                />
                                <Carousel.Caption>
                                    <h3>First  label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=Second item&bg=282c34"
                                    alt="Third item"
                                />

                                <Carousel.Caption>
                                    <h3>Second item label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=Third item&bg=20232a"
                                    alt="Third item"
                                />

                                <Carousel.Caption>
                                    <h3>Third item label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form style={{marginRight: 200}}>
                            <Card bordered={"light"} style={{padding: 10}}>
                                <ModalTitle>Create your account</ModalTitle>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control placeholder="Enter username"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicConfirmPassword">
                                    <Form.Label>Confirm password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm password"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out"/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Card>
                        </Form>
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

