import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, Col, Container, Row} from "react-bootstrap";
import {HomeButton} from './';
import {userActions} from "../../actions";

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch(userActions.getContent(this.props.location.pathname));
    }

    render() {
        const {content} = this.props;
        return (
            <div>
                {content.loading && <em>Loading ...</em>}
                {content.error && <span className="text-danger">ERROR: {content.error}</span>}
                {content.response &&
                <Container>
                    <Row>
                        <HomeButton name={"Aukcje"} href={'/auctions'}/>
                        <Col xs={0} lg={1}> </Col>
                        <HomeButton name={"Reklamy oglądane"}/>
                    </Row>
                    <Row>
                        <Col> </Col>
                        <Col xs={0} lg={2}>
                            <Card style={{textAlign: 'center', margin: 5}}>
                                <Card.Header>Punkty</Card.Header>
                                <Card.Body style={{padding: 5}}>Lp</Card.Body>
                            </Card>
                        </Col>
                        <Col> </Col>
                    </Row>
                    <Row>
                        <HomeButton name={"Regulamin"}/>
                        <Col xs={0} lg={1}> </Col>
                        <HomeButton name={"Reklamy klikane"}/>
                    </Row>

                </Container>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {content} = state;
    return {content};
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export {connectedHomePage as HomePage};

