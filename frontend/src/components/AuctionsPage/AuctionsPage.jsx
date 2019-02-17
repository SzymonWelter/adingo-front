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
            "item1":{description: "opis item1" , id: "id-item1", src: "holder.js/800x400?text=IMG_ITEM1&bg=282c34"},
            "item2":{description: "opis item2" , id: "id-item2", src: "holder.js/800x400?text=IMG_ITEM2&bg=282c34"},
            "item3":{description: "opis item3" , id: "id-item3", src: "holder.js/800x400?text=IMG_ITEM3&bg=282c34"}
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