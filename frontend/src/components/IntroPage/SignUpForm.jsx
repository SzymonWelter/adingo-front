import React, {Component} from 'react';
import {Button, Card, Col, Form} from "react-bootstrap";

export class SignUpForm extends Component {
    render() {
        return (
            <Form>
                <Card bordered={"light"} style={{padding: 10}}>
                    <Card.Title>Zarejestruj się już teraz!</Card.Title>
                    <Form.Group controlId="signUpEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Wprowadź email"/>
                    </Form.Group>
                    <Form.Group controlId="signUpUsername">
                        <Form.Label>Nazwa użytkownika</Form.Label>
                        <Form.Control placeholder="Wprowadż nazwe użytkownika"/>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="signUpPassword">
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control type="password" placeholder="Wprowadź hasło"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="signUpConfirmPassword">
                            <Form.Label>Powtórz hasło</Form.Label>
                            <Form.Control type="password" placeholder="Powtórz hasło"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} xs={12} >
                            <Form.Check type="checkbox" label="Akceptuje regulamin"/>
                        </Form.Group>
                        <Form.Group as={Col} xs={6} lg={5}>
                            <Button variant="primary" type="submit" block>
                                Zarejestruj się
                            </Button>
                        </Form.Group>
                        <Form.Group as={Col} xs={6} lg={7} >
                            <Form.Check type="checkbox" label="Zapamiętaj mnie"/>
                        </Form.Group>
                    </Form.Row>
                </Card>
            </Form>
        );
    }
}
