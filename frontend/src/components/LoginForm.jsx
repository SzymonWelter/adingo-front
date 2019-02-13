import React from "react";
import {Button, Card, Col, Form, Modal, Row} from "react-bootstrap";


export class LoginForm extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size={"xs"}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Card >
                        <Card.Header>Logowanie</Card.Header>
                        <Card.Body>
                            <Form >
                                <Form.Group>
                                    <Form.Label>Email/login</Form.Label>
                                    <Form.Control placeholder="Wprowadź email/login"/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Hasło</Form.Label>
                                    <Form.Control type="password" placeholder="Wprowadź hasło"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="Zapamiętaj mnie"/>
                                </Form.Group>
                                <Row>
                                    <Col >
                                        <Button variant="primary" type="submit">
                                            Zaloguj
                                        </Button>
                                    </Col>
                                    <Col style={{textAlign: "right"}}>
                                        <Button variant="secondary" onClick={this.props.onHide}>
                                            Anuluj
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        );
    }
}
