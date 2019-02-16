import React, {Component} from 'react';
import {Col} from "react-bootstrap";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn} from 'mdbreact';

export class AuctionItem extends Component {
    render() {
        return (
            <Col xs ={12} lg={6}>
                <MDBCard wide style={{margin: 5}}>
                    <MDBCardImage cascade src="holder.js/800x400?text=ITEM&bg=282c34" className="img-fluid z-depth-1 rounded-circle" />
                    <MDBCardBody cascade style={{textAlign: 'center'}}>
                        <MDBCardTitle>{this.props.name}</MDBCardTitle>
                        <MDBCardText>{this.props.data.description}</MDBCardText>
                        <MDBBtn href={`#${this.props.data.id}`}>Dołącz</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </Col>
        );
    }
}
