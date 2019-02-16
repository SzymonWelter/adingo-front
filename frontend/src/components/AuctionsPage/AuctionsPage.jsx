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
        const items = {
            "item1":{description: "opis item1" , id: "id-item1"},
            "item2":{description: "opis item2" , id: "id-item2"},
            "item3":{description: "opis item3" , id: "id-item3"}
        };
        return (
            <Row>
                {Object.keys(items).map((x,i)=><AuctionItem key={i} name={x} data={items[x]}/>)}
            </Row>
        );
    }
}
function mapStateToProps() {
    return {};
}

const connectedAuctionsPage = connect(mapStateToProps)(AuctionsPage);
export {connectedAuctionsPage as AuctionsPage};