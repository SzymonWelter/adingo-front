import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {LoginForm} from '../IntroPage';
import {connect} from "react-redux";

class MainNav extends React.Component{

    constructor(...args){
        super(...args);

        this.state={loginFormShow: false};
    }

    render() {
        let loginFormClose = () => this.setState({loginFormShow: false});
        const {user} = this.props;
        const options = ["Konto","Wyloguj"];

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
                        {
                            user ?
                        <NavDropdown title={user.username} id={"user-dropdown"} alignRight>
                            {options.map((x, index)=>
                                <NavDropdown.Item key={index}>{x}</NavDropdown.Item>
                            )}
                        </NavDropdown>
                        : <Nav.Link onClick={() => this.setState({ loginFormShow: true })}>
                            Zaloguj się
                        </Nav.Link>
                        }
                    </Nav>
                    <LoginForm show = {this.state.loginFormShow} onHide = {loginFormClose}/>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
function mapStateToProps(state) {
    const { auth } = state;
    const { user } = auth;
    return {
        user
    };
}

const connectedMainNav = connect(mapStateToProps)(MainNav);
export { connectedMainNav as MainNav };