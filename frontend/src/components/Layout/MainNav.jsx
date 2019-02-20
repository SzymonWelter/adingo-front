import React from 'react';
import {LoginForm} from '../IntroPage';
import {connect} from "react-redux";
import {history} from '../../helpers';
import {
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBNavbarNav,
    MDBNavbarToggler, MDBCollapse, MDBNavbar, MDBNavbarBrand, MDBBtn, MDBNavItem,
} from "mdbreact";

class MainNav extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {loginFormShow: false, isOpen: false};
    }

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    };


    render() {
        let loginFormClose = () => this.setState({loginFormShow: false});
        const {user} = this.props;
        const options = {"Konto": "/user", "Wyloguj": "/intro"};

        return (
            <MDBNavbar color={"mdb-color"} expand={"lg"} style={{position: "relative", marginBottom: 50}}>
                <MDBNavbarBrand style={{position: "absolute", left: "50%", transform: "translateX(-50%)"}}>
                        <img
                            className="d-block w-100"
                            src="holder.js/200x40?text=LOGO&bg=FFEF00"
                            alt="LOGO"
                            onClick={()=>history.push("/")}
                            style={{cursor:"pointer"}}
                        />
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse}/>
                <MDBCollapse isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right>
                        {
                            user ?
                                <MDBDropdown>
                                    <MDBDropdownToggle caret color={"mdb-color"}>
                                        {user.username}
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu right basic>
                                        {
                                            Object.keys(options).map((key, i) => (
                                                <MDBDropdownItem href={options[key]} key={i}>{key}</MDBDropdownItem>
                                            ))
                                        }
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                : <MDBNavItem>
                                    <MDBBtn color={"mdb-color"} onClick={() => this.setState({loginFormShow: true})}>
                                        Zaloguj się
                                    </MDBBtn>
                                </MDBNavItem>
                        }
                    </MDBNavbarNav>
                    <LoginForm show={this.state.loginFormShow} onHide={loginFormClose}/>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

function mapStateToProps(state) {
    const {auth} = state;
    const {user} = auth;
    return {
        user
    };
}

const connectedMainNav = connect(mapStateToProps)(MainNav);
export {connectedMainNav as MainNav};