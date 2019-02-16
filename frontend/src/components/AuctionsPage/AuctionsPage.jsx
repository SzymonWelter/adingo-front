import React, {Component} from 'react';
import {userActions} from "../../actions";
import {connect} from "react-redux";
import {AuctionItem} from "./";
import Row from "react-bootstrap/es/Row";

class AuctionsPage extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(userActions.getContent(this.props.location.pathname));
    }

    render() {
        const items = ["item1", "item2","item3"];
        return (
            <Row>
                {items.map((x,i)=><AuctionItem key={i}/>)}
            </Row>
        );
    }
}
function mapStateToProps() {
    return {};
}

const connectedAuctionsPage = connect(mapStateToProps)(AuctionsPage);
export {connectedAuctionsPage as AuctionsPage};