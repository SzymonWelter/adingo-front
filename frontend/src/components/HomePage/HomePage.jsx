import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, Container} from "react-bootstrap";
import {HomeButton, HomeRow} from './';
import {userActions} from "../../actions";

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch(userActions.getContent("/"));
    }

    render() {
        return (
            <Container>
                <HomeRow xs={0} lg={1}>
                    <HomeButton name={"Aukcje"}/>
                    <div> </div>
                    <HomeButton name={"Reklamy oglądane"}/>
                </HomeRow>
                <HomeRow xs={0} lg={2}>
                    <div> </div>
                    <Card style={{textAlign: 'center', margin: 5}}>
                        <Card.Header>Punkty</Card.Header>
                        <Card.Body style={{padding: 5}}>Lp</Card.Body>
                    </Card>
                    <div> </div>
                </HomeRow>
                <HomeRow xs={0} lg={1}>
                    <HomeButton name={"Regulamin"}/>
                    <div> </div>
                    <HomeButton name={"Reklamy klikane"}/>
                </HomeRow>
            </Container>
        );
    }
}

function mapStateToProps() {
    return {};
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export {connectedHomePage as HomePage};

