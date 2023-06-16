import React from 'react';
import { connect } from 'react-redux'
import {addComponent} from '../actions/index'

class MenuItem extends React.Component{

    render() {
        return (
            <button href="#" onClick={this.props.generateEvent} style={{'backgroundColor':'orange'}}>{this.props.label}</button>
        );
    }

}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch, props) {
    return {
        generateEvent : function() {
            dispatch(addComponent(props.label, props.position));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)
