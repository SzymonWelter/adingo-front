import React, {Component} from 'react';
import {Col} from "react-bootstrap";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn} from 'mdbreact';

export class AuctionItem extends Component {

    onClickHandler = (e) => {
        const {id} = this.props.data;
        console.log(`joined to auction with id: ${id}`);
    };

    render() {
        const {name,description, src} = this.props.data;
        return (
            <Col xs ={12} lg={6}>
                <MDBCard wide style={{margin: 5}}>
                    <MDBCardImage cascade src={src} className="img-fluid z-depth-1 rounded-circle" />
                    <MDBCardBody cascade style={{textAlign: 'center'}}>
                        <MDBCardTitle>{name}</MDBCardTitle>
                        <MDBCardText>{description}</MDBCardText>
                        <MDBBtn onClick={this.onClickHandler}>Dołącz</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </Col>
        );
    }
}
