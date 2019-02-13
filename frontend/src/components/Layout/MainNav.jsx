import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {LoginForm} from '../IntroPage';

export class MainNav extends React.Component{

    constructor(...args){
        super(...args);

        this.state={loginFormShow: false};
    }

    render() {
        let loginFormClose = ()=> this.setState({loginFormShow: false});
        return (
            <Navbar bg="dark" variant="dark" expand={"lg"} style={{position: "relative", marginBottom: 50}}>
                <Navbar.Brand style={{position: "absolute", left: "50%", transform: "translateX(-50%)"}} href="/">
                    <img
                        className="d-block w-100"
                        src="holder.js/200x40?text=LOGO&bg=FFEF00"
                        alt="LOGO"
                    />
                </Navbar.Brand>
                <Nav/>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end" id={"basic-navbar-nav"}>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={() => this.setState({ loginFormShow: true })}>
                            Zaloguj się
                    </Nav.Link>
                    </Nav>
                    <LoginForm show = {this.state.loginFormShow} onHide = {loginFormClose}/>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
