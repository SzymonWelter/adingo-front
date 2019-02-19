import React, {Component} from 'react';
import {userActions} from "../../actions";
import {connect} from "react-redux";
import {AuctionItem} from "./";
import Row from "react-bootstrap/es/Row";

class AuctionsPage extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(userActions.getContent(this.props.location.pathname));
    }

    componentDidMount() {

    }

    render() {
        const {loading,error,items} = this.props.content;
        console.log(loading,error,items);
        return (
            <div>
                {loading && <em>Loading ...</em>}
                {error && <span className="text-danger">ERROR: {error}</span>}
                {items &&
                <Row>
                    {items.map((x, i) => <AuctionItem key={i} data={x}/>)}
                </Row>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {content} = state;
    return {
        content
    };
}

const connectedAuctionsPage = connect(mapStateToProps)(AuctionsPage);
export {connectedAuctionsPage as AuctionsPage};