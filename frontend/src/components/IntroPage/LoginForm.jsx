import React from "react";
import {Button, Card, Col, Form, Modal, Row} from "react-bootstrap";
import {userActions} from "../../actions";
import {connect} from "react-redux";


class LoginForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({submitted: true});
        const {username, password} = this.state;
        const {dispatch} = this.props;
        if(username && password){
            dispatch(userActions.login(username,password));
        }
    }
    render() {
        const {loggingIn, onHide, show} = this.props;
        const {username, password, submitted} = this.state;
        return (
            <Modal
                show={localStorage.getItem('user') ? false : show}
                onHide={onHide}
                size={"xs"}
            >
                <Modal.Body>
                    <Card >
                        <Card.Header>Logowanie</Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Email/login</Form.Label>
                                    <Form.Control placeholder="Wprowadź email/login" onChange={this.handleChange} name ={"username"}/>
                                    {submitted && !username &&
                                    <div className="help-block">Pole jest wymagane</div>
                                    }
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Hasło</Form.Label>
                                    <Form.Control type="password" placeholder="Wprowadź hasło" onChange={this.handleChange} name={"password"} />
                                    {submitted && !password &&
                                    <div className="help-block">Pole jest wymagane</div>
                                    }
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="Zapamiętaj mnie"/>
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Button variant="primary" type="submit">
                                            Zaloguj
                                        </Button>
                                        {loggingIn &&
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                        }
                                    </Col>
                                    <Col style={{textAlign: "right"}}>
                                        <Button variant="secondary" onClick={onHide}>
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
function mapStateToProps(state) {
    const { loggingIn } = state.auth;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginForm);
export { connectedLoginPage as LoginForm };