import React, {Component} from 'react';
import {userActions} from "../../actions";
import {connect} from "react-redux";

class AuctionsPage extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(userActions.getContent(this.props.location.pathname));
    }

    render() {
        return (
            <div>
                Auction Page
            </div>
        );
    }
}
function mapStateToProps() {
    return {};
}

const connectedAuctionsPage = connect(mapStateToProps)(AuctionsPage);
export {connectedAuctionsPage as AuctionsPage};